const Koa = require('koa')
const ejs  = require('ejs')
const views = require('koa-views')
const { resolve } = require('path')

const app = new Koa()

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))
 
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'Changzeqing'
  })
})

app.listen(4455)