//getListingIds from search page
// chrome.runtime.onMessage.addListener(messageReceivedFromPopup);

console.log('getlistings from seachpage')
//
// function messageReceivedFromPopup(message, sender, sendResponseBackToPopup) {
//     if (message === 'GET_LISTING_ID') {
//         chrome.runtime.onMessage.removeListener(messageReceivedFromPopup);
var listingIds = []
getAddedValueData()

const getListingId = listing => parseFloat(listing.pathname.split('auction-')[1].split('.')[0])

const findChild = childnodes => {
  for (var i = 0; i < childnodes.length; i++) {
    if (childnodes[i].className == 'property-card-attribute-details') {
      return childnodes[i]
    }
  }
}

function checkListings(data) {
  data = JSON.parse(data)
  var listingLinks = document.getElementsByClassName('dotted')
  listingIds = [];
  if (listingLinks.length) {
      for (var i = 0; i < listingLinks.length; i++) {
        listingIds.push(getListingId(listingLinks[i]));
      }
  }
  data = data.filter((value) => listingIds.indexOf(value.listing_id) != -1)

  for (var i = 0; i < listingLinks.length; i++) {
    console.log("listing id =", getListingId(listingLinks[i]))
    const jsonEntryIndex = data.indexOf(getListingId(listingLinks[i]))
    if (jsonEntryIndex != -1) {
      console.log("jsonEntryIndex =", jsonEntryIndex)
      const wrapper = listingLinks[i].parentElement.parentElement.parentElement

      const child = findChild(wrapper.childNodes)
      console.log("child =", child)
      const injectedElem = document.createElement("div")

      if (data[jsonEntryIndex].avg_sunlight_kwh) {
        injectedElem.innerHTML(`sunshine = ${data[jsonEntryIndex].avg_sunlight_kwh}`)
        wrapper.child.appendChild(injectedElem)
      }
    }
  }

}

        // data.map(entry => {
        //   listingLinks.map(listing => getListingId(listing)).indexOf(entry.listing_id)
        // })

          // console.log(listingLinks[0].parentElement.parentElement.parentElement);
          //
          // var wrapper = listingLinks[0].parentElement.parentElement.parentElement
          //
          // for (var i = 0; i < wrapper.childNodes.length; i++) {
          //   if(wrapper.childNodes[i].className == 'property-card-attribute-details') {
          //     var addedValue = document.createElement("div")
          //     addedValue.innerHTML = "HI!!!"
          //     wrapper.childNodes[i].appendChild(addedValue)
          //   }
          // }
    // sendResponseBackToPopup(listingNumber)
//     }
// }
function getAddedValueData() {
  return $.get( "https://home-space.s3.amazonaws.com/data.json", function( data ) {
    checkListings(data);
  });
}
