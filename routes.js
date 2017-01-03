var db = require('./db')
var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https',
  apiKey: process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY,
  formatter: null       
};

var geocoder = NodeGeocoder(options);

// using Promise
geocoder.geocode('Wellington, NZ')
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log(err);
  });


function getIndex (req, res) {
  var data = {
    url:'http://maps.google.com/maps/api/js?sensor=false',
    div: '<div>hello</div'
  }

    res.render('index',data)
}


module.exports = {
  getIndex
}
