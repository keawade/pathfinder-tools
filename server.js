var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chardata')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function (callback) {
  console.log('[mongoose] connected to mongodb://localhost/chardata')
})

var app = express()
var routes = require('./routes/')

app.set('view engine', 'jade')
app.set('port', process.env.PORT || 3000)
app.set('ip', process.env.IP || 'localhost')

app.use(express.static('public'))
app.locals.sitename = 'Pathfinder Tools'
app.locals.source_url = 'https://github.com/keawade/pathfinder-resources'

app.use(routes)

var server = app.listen(app.get('port'), app.get('ip'), function () {
  var address = server.address()
  console.log('[server.js] app running at http://%s:%s', address.address, address.port)
})
