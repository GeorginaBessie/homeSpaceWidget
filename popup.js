chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(listingReceived);
});

document.addEventListener('DOMContentLoaded', function () {
    loadDataFromPage();
});

function loadDataFromPage() {
    chrome.tabs.executeScript(null, {file: "jquery-3.2.1.min.js"});
    chrome.tabs.executeScript(null, {file: "listingContentScript.js"});
}

function listingReceived(currentListing) {
    console.log(currentListing);
    $('#status').text(currentListing.suburb);
}
