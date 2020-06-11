const express = require("express")
const app = express()
const port = 6666
const models = require("./sequelize")
//官方新版本提供的解析请求体的中间件,不需要body-parser
app.use(express.json())
//默认的静态资源目录
// app.use(app.static("static"))

app.use("/", (req, res, next) => {
  console.log(req.method, req.path, req.query)
  if (req.method === "GET") {
    models.User.findAll({raw: true}).then((userList) => {
      console.log(userList)
      res.status(200).send({data: userList})
    })
  } else if (req.method === "POST") {
    console.log(req.body)
    models.User.create(req.body, {raw: true}).then((user) => {
      res.status(200).send({id: user.id})
    })
  }
  // 不能在next之后再返回响应！！！
  // next()
})

app.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
