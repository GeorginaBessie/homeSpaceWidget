// document.body.style.backgroundColor = 'red';


var listingId = $('meta[property="og:url"]').attr('content').split('.htm')[0].split('-').pop();
var listingNumber = parseFloat(listingId);
console.log(listingId);

$.get("https://home-space.s3.amazonaws.com/data.json", function (data) {
    var dataArray = JSON.parse(data);
    var currentListing = dataArray.filter(function (item) {
        return item.listing_id === listingNumber;
    })[0];

    var port = chrome.runtime.connect();
    port.postMessage(currentListing);
});
