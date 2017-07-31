console.log("searchContentScript.js")

$.get("https://home-space.s3.amazonaws.com/data.json", improveListings);

const getListingId = listing =>
  $(listing)
    .find('a.dotted')
    .attr('href')
    .split('auction-')[1].split('.')[0]

const matchListingId = (listings, jsonListingId) =>
  $(listings).filter((i, elem) =>
    getListingId(elem) == jsonListingId)

// appending information to the page
const newDetails = jsonEntry =>
  $("<div/>", {
    text: jsonEntry.avg_sunlight_kwh ?
            "sunshine: " + jsonEntry.avg_sunlight_kwh + " kwh/m2" :
            null
  })

// receive data.json file and inject new data onto listings whenever we can
function improveListings (data) {
  data = JSON.parse(data)

  const listings = $('.property-card')

  // map over json, matching on listing IDs
  return data.forEach(value => {
    const singleListing = matchListingId(listings, value.listing_id)

    if (singleListing) {
      return $(singleListing)
        .find('.property-card-attribute-details')
        .append(newDetails(value))
    }
  })
}
