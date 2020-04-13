import { createRuleSwapList,  applyTheme } from './ops';
import dark from './themes/dark';

function main() {
    createRuleSwapList();
    applyTheme(dark);
}

window.onload = main;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.themeChange) {
            applyTheme(request.themeChange);
            sendResponse({farewell: "goodbye"});
        }
    }
);
