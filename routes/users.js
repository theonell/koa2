const router = require('koa-router')()
const Goods = require('../dao/goods')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  let goods = await Goods.find(function(err, goods) {
    if (err) return console.error(err)
    return goods
  })
  ctx.body = goods
})

router.post('/add_goods', async (ctx, next) => {
  const { request, reponse } = ctx
  const { goods_name, price, number } = request.body
  const goods = new Goods({
    goods_name: goods_name,
    price: price,
    number: number
  })
  const result = await goods.save()
  ctx.body = result
})

router.put('/update_goods', async(ctx, next) => {
  const { request, reponse } = ctx
  const {_id} = request.body
  console.log(request.body)
  let goods = await Goods.updateOne({_id: _id},request.body, function(err) {
    console.log(err)
  })
  ctx.body = goods

})

router.delete('/del_goods', async(ctx, next) => {
  const { request, reponse } = ctx
  const {id} = request.body
  let goods = await Goods.deleteOne({_id: id}, function(err) {
    console.log(err)
  })
  ctx.body = goods
})

module.exports = router
