var express = require('express')
var router = module.exports = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Thing!'
  })
})

router.get('/charsheet', function (req, res) {
  res.render('charsheet/index', {
    title: 'Character Sheet'
  })
})

router.get('/dice', function (req, res) {
  res.render('dice', {
    title: 'Virtual Dice'
  })
})
