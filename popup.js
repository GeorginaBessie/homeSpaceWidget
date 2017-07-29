document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.executeScript(null, {file: "getListingIdContentScript.js"});

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'GET_LISTING_ID', null, listingIdReceived);
    });
});

var currentListingId;
function listingIdReceived(listingId) {
    currentListingId = listingId;
    if (currentListingId) {
        $.get("https://home-space.s3.amazonaws.com/data.json", backendDataLoaded);
    }
}

function backendDataLoaded(data) {
    var dataArray = JSON.parse(data);
    var currentListings = dataArray.filter(function (item) {
        return item.listing_id === currentListingId;
    });

    if (currentListings.length) {
        console.log(currentListings[0]);

        //TODO: map properties of currentListings[0] object to $('.homeSpace') table rows
    }
}