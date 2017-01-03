var db = require('./db')


function getIndex (req, res) {
  var data = {
    url:'http://maps.google.com/maps/api/js?sensor=false'
  }
    res.render('index',data)
}


module.exports = {
  getIndex
}
