import themes from './themes';

import Slack from './themes/slack';
import { cloneDeep } from 'lodash';
import { Theme } from './types';

const APPLIED_THEME_KEY = 'appliedTheme';
const CUSTOM_THEMES_KEY = 'customThemes';

export function initializeCustomThemes() {
    getCustomThemes(customThemes => {
        if(customThemes) {
            return;
        } else {
            var customThemesObj = [
                {
                    ...cloneDeep(Slack),
                    name: 'Custom Theme 1',
                    isCustom: true
                },
                {
                    ...cloneDeep(Slack),
                    name: 'Custom Theme 2',
                    isCustom: true
                },
                {
                    ...cloneDeep(Slack),
                    name: 'Custom Theme 3',
                    isCustom: true
                }
            ];
            chrome.storage.sync.set({ [CUSTOM_THEMES_KEY]: customThemesObj });
        }
    });
}

export function getCustomThemes(cb) {
    chrome.storage.sync.get([CUSTOM_THEMES_KEY], function(result) {
        cb(result[CUSTOM_THEMES_KEY]);
    });
}

export function getAppliedTheme(cb) {
    chrome.storage.sync.get([APPLIED_THEME_KEY], function(result) {
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
    chrome.storage.sync.set({ [APPLIED_THEME_KEY]: themeName}, function() {
        if (cb) {
            cb();
        }
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
