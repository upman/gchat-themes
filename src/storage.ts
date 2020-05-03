import dark from './themes/dark';
import themes from './themes';

const APPLIED_THEME_KEY = 'appliedTheme';

export function getAppliedTheme(cb) {
    chrome.storage.sync.get([APPLIED_THEME_KEY], function(result) {
        if (result.appliedTheme) {
            cb(themes[result.appliedTheme]);
        } else {
            cb(dark);
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
