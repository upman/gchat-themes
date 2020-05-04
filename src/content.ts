import { applyTheme, initializeRuleSwapList, onStyleSheetLoaded, addRuleSwaps } from './ops';
import { getAppliedTheme, onThemeChange, handleCustomThemeChanges } from './storage';

function main() {
    initializeRuleSwapList();
    onStyleSheetLoaded(function(styleSheet) {
        addRuleSwaps(styleSheet);
        getAppliedTheme(function (theme) {
            applyTheme(theme);
        });
    });
    handleCustomThemeChanges();
}

window.onload = main;

onThemeChange(function(theme) {
    applyTheme(theme);
});
