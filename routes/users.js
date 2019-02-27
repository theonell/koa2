const router = require('koa-router')()
const Goods = require('../dao/goods')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  const goods = await Goods.find(function(err, goods) {
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

router.get('/bar', function(ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
