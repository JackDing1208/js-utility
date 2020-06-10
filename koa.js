const koa = require("koa")
const app = new koa
const port = 4444


app.use((ctx, next) => {
  ctx.body = "hello"
})


app.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
