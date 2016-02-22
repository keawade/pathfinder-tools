var mongoose = require('mongoose')

var classesSchema = new mongoose.Schema({
  temp: String
})

var classes = mongoose.model('classes', classesSchema)
module.exports = classes
