chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'chat.google.com' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

// Receiving messages from popup.ts
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.themeChange) {
            // Proxying message to content.ts
            //@ts-ignore
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                console.log(tabs);
                chrome.tabs.sendMessage(tabs[0].id, { themeChange: request.themeChange }, function(response) {
                    sendResponse(response);
                });
            });
        }
    }
);
