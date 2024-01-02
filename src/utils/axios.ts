/*
 * @Author: SUNSAN
 * @Date: 2023-04-26 19:13:07
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-12-31 17:18:22
 * @FilePath: \resume_analysis\src\utils\axios.js
 * @Description: 封装请求
 */

import axios from 'axios'
import qs from 'qs';
import router from '../router/index'
import{ user } from '../store/user'

let baseURL = 'http://118.178.231.36:8080/'

let config = {
  baseURL: baseURL,
  timeout: 300000    //设置最大请求时间
}



const _axios = axios.create(config);

_axios.interceptors.request.use(
  config => {
    console.log(window.localStorage.getItem('token'))
  // 每次发送请求之前都检测vuex是否存有token，放在请求头发送给服务器// Authorization是根据后端自走义字段
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
  },
  error => {
  console.log("在request拦截器显示错误:",error.response)
  return Promise.reject(error);
  }
)

// 接收请求拦截器，内部根据返回值，重新组装，统一管理。

// _axios.interceptors.response.use(res => {
//   if (typeof res.data !== 'object') {
//     ElMessage.error('服务端异常！')
//     return Promise.reject(res)
//   }
//   if (res.data.code != 200) {
//     console.log(res.data);
//     if (res.data.msg) ElMessage.error(res.data.msg)
//     if (res.data.resultCode == 419) {
//       router.push({ path: '/login' })
//     }
//     return Promise.reject(res.data)
//   }
//   return res.data//返回的是数据
// })


const header = {
  'Content-Type': 'application/json;charset=UTF-8',
  // 'accessToken':'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZGVudGl0eSI6IkhSIiwiaWQiOiIxIiwiZXhwIjoxNzA5NTk1MTQzfQ.vUXTwTW7PxQlpQyv_RporMDZO2-XMekQlDSPel444VM',
  // 'Authorization': storedToken,
}


const http = {
  get(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        params,
        headers: header,
        method: 'GET'
      }).then(res => {
        resolve(res.data)
        return res
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'POST'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  put(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'PUT'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  },
  delete(url = '', params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: qs.parse(params),
        headers: header,
        method: 'DELETE'
      }).then(res => {
        resolve(res.data)
        return res.data
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default http