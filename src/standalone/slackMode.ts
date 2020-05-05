import { applyTheme, initializeRuleSwapList, onStyleSheetLoaded, addRuleSwaps } from '../ops';
import slack from '../themes/slack';

function main() {
    if (!window.location.href.match('chat.google.com')) {
        return;
    }
    initializeRuleSwapList();
    onStyleSheetLoaded(function(styleSheet) {
        addRuleSwaps(styleSheet);
        applyTheme(slack);
    });
}

window.onload = main;
