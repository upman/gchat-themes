import { initializeCustomThemes, initializeAppliedTheme } from './storage';

chrome.runtime.onInstalled.addListener(function() {
    initializeCustomThemes();
    initializeAppliedTheme();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'mail.google.com/chat/' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});
