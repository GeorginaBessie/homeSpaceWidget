//getListingIds from search page
chrome.runtime.onMessage.addListener(messageReceivedFromPopup);
console.log('getlistings from seachpage')

function messageReceivedFromPopup(message, sender, sendResponseBackToPopup) {
    if (message === 'GET_LISTING_ID') {
        chrome.runtime.onMessage.removeListener(messageReceivedFromPopup);

        var listingLinks = document.getElementsByClassName('dotted')
        console.log(parseFloat(listingLinks[0].pathname.split('auction-')[1].split('.')[0]))
        listingIds = [];
        if (listingLinks.length) {
            for (var i = 0; i < listingLinks.length; i++) {
              listingIds.push(parseFloat(listingLinks[i].pathname.split('auction-')[1].split('.')[0]))  ;
            }
        }

        sendResponseBackToPopup(listingNumber)
    }
}
