import { applyTheme, initializeRuleSwapList, onStyleSheetLoaded, addRuleSwaps } from './ops';
import { getAppliedTheme, onThemeChange } from './storage';

function main() {
    initializeRuleSwapList();
    onStyleSheetLoaded(function(styleSheet) {
        addRuleSwaps(styleSheet);
        getAppliedTheme(function (theme) {
            applyTheme(theme);
        });
    });
}

window.onload = main;

onThemeChange(function(theme) {
    applyTheme(theme);
});
