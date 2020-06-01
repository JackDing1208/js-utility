var express = require("express")
var app = express()

const port = 6666
// app.get("/", (req, res) => {
//   console.log(req.method)
//   console.log(req.query)
//   res.send("hello")
// })

app.post("/", (req, res) => {
  console.log(req.method)
  console.log(req)
  res.send("world")
})


app.listen(port, () => {
  console.log(`server is watching port ${port}`)
})
