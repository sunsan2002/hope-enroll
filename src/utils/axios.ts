/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:07
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-11-07 21:31:43
 * @FilePath: \resume_analysis\src\utils\axios.js
 * @Description: 封装请求
 */

import axios from 'axios'
import qs from 'qs';
import router from '../router/index'

let baseURL = 'http://192.168.18.9:5555/'

let config = {
  baseURL: baseURL,
  timeout: 300000    //设置最大请求时间
}

const _axios = axios.create(config);

// 接收请求拦截器，内部根据返回值，重新组装，统一管理。

// _axios.interceptors.response.use(res => {
//   if (typeof res.data !== 'object') {
//     ElMessage.error('服务端异常！')
//     return Promise.reject(res)
//   }
//   if (res.data.code != 200) {
//     console.log(res.data);
//     if (res.data.msg) ElMessage.error(res.data.msg)
//     if (res.data.resultCode == 419) {
//       router.push({ path: '/login' })
//     }
//     return Promise.reject(res.data)
//   }
//   return res.data//返回的是数据
// })



const header = {
  'Content-Type': 'application/json;charset=UTF-8',
  'accessToken':'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZGVudGl0eSI6IkhSIiwiaWQiOiIxIiwiZXhwIjoxNzA5NTk1MTQzfQ.vUXTwTW7PxQlpQyv_RporMDZO2-XMekQlDSPel444VM',
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