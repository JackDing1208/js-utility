const express = require("express")


const express = express()
const port = 6666

//官方新版本提供的解析请求体的中间件,不需要body-parser
express.use(express.json())
express.use(express.urlencoded())
//默认的静态资源目录
express.use(express.static("static"))

express.use("/", (req, res, next) => {
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


express.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
