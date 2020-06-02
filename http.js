const axios = require("axios")

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.defaults.timeout = 3000

// axios.get("http://localhost:6666", {
//   cancelToken: source.token,
//   params: {xxx: 1},
// }).catch(function (thrown) {
//   if (axios.isCancel(thrown)) {
//     console.log("Request canceled", thrown)
//   } else {
// }
// })

axios.defaults.retry = 4
axios.defaults.retryDelay = 1000

// axios.interceptors.response.use(() => {}, function axiosRetryInterceptor(err) {
//   var config = err.config
//   // If config does not exist or the retry option is not set, reject
//   if (!config || !config.retry) return Promise.reject(err)
//
//   // Set the variable for keeping track of the retry count
//   config.__retryCount = config.__retryCount || 0
//
//   // Check if we've maxed out the total number of retries
//   if (config.__retryCount >= config.retry) {
//     // Reject with the error
//     return Promise.reject(err)
//   }
//
//   // Increase the retry count
//   config.__retryCount += 1
//
//   // Create new promise to handle exponential backoff
//   var backoff = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve()
//     }, config.retryDelay || 1)
//   })
//
//   // Return the promise in which recalls axios to retry the request
//   return backoff.then(function () {
//     return axios(config)
//   })
// })


// axios.get("http://localhost:6666", {
//   cancelToken: source.token,
//   params: {xxx: 1},
// }).catch((err) => {
//   console.log(err.request)
// })

// //对所有请求统一拦截,可以生成实例单独拦截
// axios.interceptors.request.use(
//   (request) => {
//     //可以重新配置请求相关参数
//     // request.method = "post"
//     return request
//   }, (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error)
//   },
// )
//
// axios.interceptors.response.use(
//   (response) => {
//     //可以重新配置请求相关参数
//     console.log(response.data)
//     response.data = "hahaha"
//     return response
//   }, (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error)
//   },
// )


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


Http.post("http://localhost:6666", {xxx: 1, yyy: 5}).then((res) => {
  console.log(res.data)
})


