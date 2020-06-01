const axios = require("axios")

class Http {
  static get(url, query) {
    return axios({
      url: url,
      methods: "POST",
      params: query,
    })
  }

  static post(url, data) {
    return axios({
      url: url,
      methods: "POST",
      data: data,
    })
  }

}


// Http.get("http://localhost:6666", {xxx: 1, yyy: 5}).then((res) => {
//   console.log(res.data)
// })
//
Http.post("http://localhost:6666", {xxx: 1, yyy: 5}).then((res) => {
  console.log(res.data)
})
