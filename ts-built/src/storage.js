import dark from './themes/dark';
import themes from './themes';
import Slack from './themes/slack';
import { cloneDeep } from 'lodash';
const APPLIED_THEME_KEY = 'appliedTheme';
const CUSTOM_THEMES_KEY = 'customThemes';
export function initializeCustomThemes() {
    var customThemes = [
        Object.assign(Object.assign({}, cloneDeep(Slack)), { name: 'Custom Theme 1', custom: true }),
        Object.assign(Object.assign({}, cloneDeep(Slack)), { name: 'Custom Theme 2', custom: true }),
        Object.assign(Object.assign({}, cloneDeep(Slack)), { name: 'Custom Theme 3', custom: true })
    ];
    chrome.storage.sync.set({ [CUSTOM_THEMES_KEY]: customThemes });
}
export function getCustomThemes(cb) {
    chrome.storage.sync.get([CUSTOM_THEMES_KEY], function (result) {
        cb(result[CUSTOM_THEMES_KEY]);
    });
}
export function getAppliedTheme(cb) {
    chrome.storage.sync.get([APPLIED_THEME_KEY], function (result) {
        if (result[APPLIED_THEME_KEY]) {
            cb(themes[result[APPLIED_THEME_KEY]]);
        }
        else {
            cb(dark);
        }
    });
}
export function setAppliedTheme(themeName, cb) {
    chrome.storage.sync.set({ [APPLIED_THEME_KEY]: themeName }, function () {
        if (cb) {
            cb();
        }
    });
}
export function getThemeFromName(themeName, cb) {
    if (themes[themeName]) {
        return cb(themes[themeName]);
    }
    else {
        getCustomThemes(function (customThemes) {
            const customTheme = customThemes.find(function (c) {
                return c.name === themeName;
            });
            cb(customTheme);
        });
    }
}
export function onThemeChange(cb) {
    chrome.storage.onChanged.addListener(function (changed, namespace) {
        if (changed[APPLIED_THEME_KEY]) {
            const themeName = changed[APPLIED_THEME_KEY].newValue;
            getThemeFromName(themeName, function (theme) {
                cb(theme);
            });
        }
    });
}
