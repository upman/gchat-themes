import { createRuleSwapList,  applyTheme } from './ops';
import { getAppliedTheme, onThemeChange } from './utils';

function main() {
    createRuleSwapList();
    getAppliedTheme(function (theme) {
        applyTheme(theme);
    });
}

window.onload = main;

onThemeChange(function(theme) {
    applyTheme(theme);
});
