var NodeGeocoder = require('node-geocoder');
//node-geocoder api requirements
var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);


function fetchGoogleMap(){
  // var mapOptions = {
  //     mapTypeId: google.maps.MapTypeId.TERRAIN,
  //     zoom: 6
  // };

  geocoder.geocode('Wellington, NZ')
    .then(function(res) {
      console.log(res);
      var map = new google.map.MAP('',mapOptions)
    })
    .catch(function(err) {
      console.log(err);
    });
}
  module.exports ={
    fetchGoogleMap:fetchGoogleMap,
  }
