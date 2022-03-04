import axios from 'axios'
// axios本身就是一个实例

// axios.get('http://httpbin.org/get').then((res) => {
//   console.log(res.data)
// })

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'hai',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'hai',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 1000

// axios
//   .get('/get', {
//     params: {
//       name: 'hai',
//       age: 20
//     },
//     timeout: 2000
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// axios
//   .post('/post', {
//     data: {
//       name: 'hai',
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// 有数据的时候 两个请求一起返回
// axios
//   .all([
//     axios.get('./get', { params: { name: 'hai' } }),
//     axios.post('./post', { data: { name: 'hai' } })
//   ])
//   .then((res) => {
//     console.log(res[0])
//     console.log(res[1])
//   })

// 拦截器
// axios.interceptors.request.use(
//   (config) => {
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     return err
//   }
// )

// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('服务器响应错误')
//     return err
//   }
// )
