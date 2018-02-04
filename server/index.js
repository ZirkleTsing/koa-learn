const Koa = require('koa')
const ejs  = require('ejs')

const app = new Koa()
const { htmlTpl, ejsTpl } = require('./tpl')
app.use(async (ctx, next) => {
  ctx.type = 'text/html; chartset=utf-8'
  ctx.body = ejs.render(ejsTpl, {
    you: 'Luke',
    me: 'ChangZeqing'
  })
})

app.listen(4455)