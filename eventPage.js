chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {urlMatches: "trademe.co.nz"},
                    css: ["a[href=\"/property/residential-property-to-rent\"]"]
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "contentScript.js"});
});
