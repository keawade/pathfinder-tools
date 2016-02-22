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

router.get('/charsheet/sheet', function (req, res) {
  res.render('charsheet/sheet', {
    title: 'Character Sheet',
    character: {
      weapons: [1, 2, 3]
    }
  })
})

router.get('/dice', function (req, res) {
  res.render('generators/dice', {
    title: 'Dice Roller'
  })
})

router.get('/names', function (req, res) {
  res.render('generators/names', {
    title: 'Name Generator',
    elf: ['Not yet implemented.'],
    dwarf: ['Not yet implemented.'],
    human: ['Not yet implemented.'],
    gnome: ['Not yet implemented.'],
    halfelf: ['Not yet implemented.'],
    halforc: ['Not yet implemented.'],
    halfling: ['Not yet implemented.']
  })
})
