 // document.body.style.backgroundColor = 'red';

var listingNumber, tableHtml;

getListingNumber();

function getListingNumber() {
    var listingRef = $('#ListingTitle_noStatusListingNumberContainer');
    if (listingRef.length) {
        listingId = listingRef.text().split(' ').pop();
        console.log(listingId);
        listingNumber = parseFloat(listingId)
    }

    if (listingNumber) {
        var port = chrome.runtime.connect();
        port.postMessage('GET_TABLE_HTML');
        port.onMessage.addListener(function (response) {
            tableHtml = response;
            $.get("https://home-space.s3.amazonaws.com/data.json", backendDataLoaded);
        });
    }
}

function backendDataLoaded(data) {
    var dataArray = JSON.parse(data);
    var currentListings = dataArray.filter(function (item) {
        return item.listing_id === listingNumber;
    });

    if (currentListings.length) {
        //TODO: map properties of currentListings[0] object to tableHtml row

        // $('#location').append(
        //     $.map(data.Countries, function (country, index) {
        //     	return '<tr><td>' + country + '</td><td>' + data.Cities[index] + '</td></tr>';
        // }).join());

       $("#ListingTitle_container").append(
        '<table class="homeSpace"> <tr><td>Yearly Average Sunlight: </td><td> ' + currentListings[0].avg_sunlight_kwh + ' kwh</td></tr><table>'
      );




    }
}
