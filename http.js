const axios = require("axios")

class Http {
  static get(url, query) {
    return axios({
      url: url,
      method: "GET",
      params: query,
    })
  }

  static post(url, data) {
    return axios({
      url: url,
      method: "POST",
      data: data,
    })
  }

}


Http.get("http://localhost:6666", {xxx: 1, yyy: 5}).then((res) => {
  console.log(res.data)
})


