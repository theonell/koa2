const router = require('koa-router')()
var axios = require('axios')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  // 从上下文的request对象中获取
  let request = ctx.request
  let req_query = request.query // 获取格式化参数
  let req_querystring = request.querystring // 获取字符串

  // 从上下文中直接获取
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  let obj = {
    req_query: req_query,
    req_querystring: req_querystring,
    ctx_query: ctx_query,
    ctx_querystring: ctx_querystring
  }
  ctx.response.body = { status: 200, msg: '这是get测试的返回数据', data: obj }


})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/postData', async (ctx, next) => {
  let postData = ctx.request.body
  ctx.response.body = {
    status: 200,
    msg: '这是post测试的返回数据',
    data: postData
  }
})

module.exports = router
