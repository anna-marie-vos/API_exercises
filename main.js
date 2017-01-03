var express = require('express')
var expresshbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')
var fs = require('fs')
var routes = require('./routes')
var app = express()
var env = require('dotenv').config()
var google = require('google')

// view engine setup
app.engine('handlebars', expresshbs({defaultLayout: 'main'})) // makes the main page html file work.
app.set('view engine', 'handlebars') //causes the render function to work

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
// stuff above are all setup type things

var client = new google({
  // key: process.env.API_KEY
  key: process.env.GOOGLE_MAPS_JAVASCRIPT_API_KEY
});

var parameters = {}

// here we add client requests
client.get('search',parameters,function(error, xxx,response){
  if(error){
    console.log(error)
  }

} )

app.get('/',routes.getIndex);


module.exports = app
