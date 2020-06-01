const express = require("express")
const bodyParser=require('body-parser');


const server = express()
const port = 6666

server.use(bodyParser.urlencoded({}))


server.use("/",(req, res,next) => {
  console.log(req.method)
  console.log(req.query)
  console.log(req.body)
  res.write("hello")
  res.end()
  next()
})




server.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
