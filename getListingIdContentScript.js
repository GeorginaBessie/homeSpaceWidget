chrome.runtime.onMessage.addListener(messageReceivedFromPopup);

function messageReceivedFromPopup(message, sender, sendResponseBackToPopup) {
    if (message === 'GET_LISTING_ID') {
        chrome.runtime.onMessage.removeListener(messageReceivedFromPopup);

        var listingNumber;
        var listingRef = $('#ListingTitle_noStatusListingNumberContainer');
        if (listingRef.length) {
            listingId = listingRef.text().split(' ').pop();
            listingNumber = parseFloat(listingId)
        }

        sendResponseBackToPopup(listingNumber)
    }
}
