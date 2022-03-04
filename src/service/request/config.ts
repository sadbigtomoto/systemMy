// 1.手动切换不同的环境变量
// const BASE_URL = ''
// const BASE_NAME = ''

// 2根据process.env.NODE_ENV
// 开发环境development，生成production，测试test

let BASE_URL = 'http://httpbin.org/'
let TIME_OUT = 100000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://httpbin.org/'
  TIME_OUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org/'
} else {
  BASE_URL = 'http://httpbin.org/'
}

export { TIME_OUT, BASE_URL }
