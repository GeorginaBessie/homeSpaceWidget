//getListingId for search page
console.log('getlistings gfrom seachpage')
chrome.runtime.onMessage.addListener(messageReceivedFromPopup);

function messageReceivedFromPopup(message, sender, sendResponseBackToPopup) {
    if (message === 'GET_LISTING_ID') {
        chrome.runtime.onMessage.removeListener(messageReceivedFromPopup);

        var listingNumber;
        // var listingRef = $('#ListingTitle_noStatusListingNumberContainer');
        var listingRef = document.getElementById('ListingTitle_noStatusListingNumberContainer');


        if (listingRef.length) {
            listingId = listingRef.text().split(' ').pop();
            listingNumber = parseFloat(listingId)
        }

        sendResponseBackToPopup(listingNumber)
    }
}
