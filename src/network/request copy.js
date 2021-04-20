import axios from 'axios'

// export function request(config) {

  // 1、创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 

  // 发送真正的网络请求
  export default instance;
// }


// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1、创建axios实例
//     const instance = axios.create({
//       baseURL: '',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//   })
// }