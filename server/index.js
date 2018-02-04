const Koa = require('koa')
const app = new Koa()
const { normal } = require('./tpl')
app.use(async (ctx, next) => {
  ctx.type = 'text/html; chartset=utf-8'
  ctx.body = normal
})

app.listen(4455)