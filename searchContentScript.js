// document.body.style.backgroundColor = 'red';


$.get("https://home-space.s3.amazonaws.com/data.json", backendDataLoaded);

function backendDataLoaded(data) {
    var allListings = JSON.parse(data);
    var allListingsMap = allListings.reduce(function (acc, next) {
        acc[next.listing_id] = next;
        return acc;
    }, {});

    $(".saveToWatchlist").each(function(index, element) {
        var link = $(element).find('a').attr('href');
        var listingId = link.split('id=')[1].split('&')[0];
        var currentListing = allListingsMap[listingId];
        if (currentListing) {
            var detailsButton = $('<button id="homeDetailsButton' + index + '"/>')
                .text('Home Details')
                .attr('title', JSON.stringify(currentListing));

            //TODO: you can change button to some other element and change tooltip (title attribute to actual div with the same data)

            $(element).after(detailsButton);
        }
    });
}