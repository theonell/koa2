const router = require('koa-router')()
const User = require('../dao/user')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  const user = new User({title: '11'})
  const result =  await user.save()
  ctx.body = result
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
