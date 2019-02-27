var mongoose = require('mongoose')
var Schema = mongoose.Schema

var blogSchema = new Schema({
  goods_name: String,
  price: String,
  number: Number
})

var Goods = mongoose.model('goods', blogSchema, 'goods')

module.exports = Goods
