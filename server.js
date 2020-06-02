const express = require("express")


const server = express()
const port = 6666

//官方新版本提供的解析请求体的中间件,不需要body-parser
server.use(express.json())
server.use(express.urlencoded())
//默认的静态资源目录
server.use(express.static("static"))

server.use("/", (req, res, next) => {
  console.log(req.method)
  console.log(req.hostname)
  console.log(req.query, req.body)
  console.log("--------------")
  if (req.method === "GET") {
    res.send("hello")
  } else {
    res.send("world")
  }
  next()
})


server.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
