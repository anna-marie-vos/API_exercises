var db = require('./db')
var googlemaps = require('./googlemaps')
var NodeGeocoder = require('node-geocoder');


function getIndex (req, res) {
  
  googlemaps.fetchGoogleMap()

    var options = googlemaps.fetchGoogleMap()


  res.render('index')
}

function displaygoogleMap(req,res){
  googlemaps.fetchGoogleMap()
  .then(function(){
    res.render('index')
  })
}


module.exports = {
  getIndex,
  displaygoogleMap,
}
