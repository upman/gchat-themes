import themes from './themes';
import DarkMode from './themes/dark';

import Slack from './themes/slack';
import Dark from './themes/dark';
import DefaultTheme from './themes/default';
import cloneDeep from 'lodash/cloneDeep';
import each from 'lodash/each';
import range from 'lodash/range';
import { Theme } from './types';
import ThemeMeta from './themes/themeMeta';
import { applyThemeProperty } from './ops';

const APPLIED_THEME_KEY = 'appliedTheme';
const CUSTOM_THEMES_KEY = 'customThemes';
const CUSTOM_THEME_VERSION_KEY = 'customThemesVersion';
const CURRENT_CUSTOM_THEME_VERSION = 2;

export function initializeCustomThemes() {
    getCustomThemes(customThemes => {
        var customThemesObj = [
            {
                ...cloneDeep(DefaultTheme),
                name: 'Custom Theme 1',
                isCustom: true
            },
            {
                ...cloneDeep(Dark),
                name: 'Custom Theme 2',
                isCustom: true
            },
            {
                ...cloneDeep(Slack),
                name: 'Custom Theme 3',
                isCustom: true
            }
        ];
        if(customThemes) {
            getCustomThemesVersion((version) => {
                if (version === CURRENT_CUSTOM_THEME_VERSION) {
                    return;
                } else {
                    for(let i = 0; i < CURRENT_CUSTOM_THEME_VERSION; i++) {
                        migrateCustomThemes(i, customThemes);
                    }
                    setCustomThemes(customThemes);
                    setCustomThemeVersion(CURRENT_CUSTOM_THEME_VERSION);
                }
            });
        } else {
            setCustomThemes(customThemesObj);
        }
    });
}

export function setCustomThemeVersion(customThemeVersion) {
    chrome.storage.local.set({ [CUSTOM_THEME_VERSION_KEY]: customThemeVersion });
}

export function setCustomThemes(customThemes) {
    chrome.storage.local.set({ [CUSTOM_THEMES_KEY]: customThemes });
}

export function getCustomThemesVersion(cb) {
    chrome.storage.local.get([CUSTOM_THEME_VERSION_KEY], (result) => {
        if(result[CUSTOM_THEME_VERSION_KEY]) {
            cb(result[CUSTOM_THEME_VERSION_KEY]);
        } else {
            cb(1);
        }
    });
}

export function migrateCustomThemes(version, customThemes) {
    if (version === 1) {
        each(customThemes, (customTheme) => {
            customTheme.userNameColor = customTheme.props.primaryText;
        });
    }
}

export function initializeAppliedTheme() {
    getAppliedTheme(appliedTheme => {
        if (appliedTheme) {
            return;
        }

        chrome.storage.local.set({ [APPLIED_THEME_KEY]: DarkMode.name });
    });
}

export function writeCustomThemes(customThemes) {
    chrome.storage.local.set({ [CUSTOM_THEMES_KEY]: customThemes});
}

export function getCustomThemes(cb) {
    chrome.storage.local.get([CUSTOM_THEMES_KEY], function(result) {
        cb(result[CUSTOM_THEMES_KEY]);
    });
}

export function getAppliedTheme(cb) {
    chrome.storage.local.get([APPLIED_THEME_KEY], function(result) {
        if (result[APPLIED_THEME_KEY] && themes[result[APPLIED_THEME_KEY]]) {
            cb(themes[result[APPLIED_THEME_KEY]]);
        } else {
            getCustomThemes(function(customThemes) {
                var appliedCustomTheme = customThemes.find(c => c.name === result[APPLIED_THEME_KEY]);
                cb(appliedCustomTheme);
            });
        }
    });
}

export function setAppliedTheme(themeName, cb?: () => void) {
    chrome.storage.local.set({ [APPLIED_THEME_KEY]: themeName}, function() {
        cb && cb();
    });
}

export function getThemeFromName(themeName, cb) {
    if (themes[themeName]) {
        return cb(themes[themeName]);
    } else {
        getCustomThemes(function(customThemes) {
            const customTheme = customThemes.find(function(c: Theme) {
                return c.name === themeName;
            });
            cb(customTheme);
        });
    }
}

export function onThemeChange(cb) {
    chrome.storage.onChanged.addListener(function(changed, namespace) {
        if (changed[APPLIED_THEME_KEY]) {
            const themeName = changed[APPLIED_THEME_KEY].newValue;
            getThemeFromName(themeName, function(theme) {
                cb(theme);
            });
        }
    });
}

export function handleCustomThemeChanges() {
    chrome.storage.onChanged.addListener(function(changed) {
        if(changed[CUSTOM_THEMES_KEY]) {
            each(range(0, changed[CUSTOM_THEMES_KEY].oldValue.length), function(index) {
                const oldCustomTheme = changed[CUSTOM_THEMES_KEY].oldValue[index];
                const newCustomTheme = changed[CUSTOM_THEMES_KEY].newValue[index];
                each(Object.keys(ThemeMeta), metaKey => {
                    if (
                        oldCustomTheme[metaKey] &&
                        oldCustomTheme[metaKey] !== newCustomTheme[metaKey]
                    ) {
                        applyThemeProperty(newCustomTheme, 'misc', newCustomTheme[metaKey]);
                    }
                    if (
                        oldCustomTheme.props[metaKey] &&
                        oldCustomTheme.props[metaKey] !== newCustomTheme.props[metaKey]
                    ) {
                        applyThemeProperty(newCustomTheme, metaKey, newCustomTheme.props[metaKey]);
                        applyThemeProperty(newCustomTheme, 'misc', null);
                    }
                });
            });
        }
    });
}
