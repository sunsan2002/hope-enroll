/*
 * @Author: STATICHIT
 * @Date: 2023-04-26 19:13:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-24 21:00:42
 * @FilePath: \resume_analysis\src\utils\axios.js
 * @Description: 封装请求
 */

import axios from 'axios'
import qs from 'qs';
import router from '../router/index'
import{ user } from '../store/user'

let baseURL = 'http://192.168.50.173:8080/'

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

let store = user();

const header = {
  'Content-Type': 'application/json;charset=UTF-8',
  'accessToken':'eyJ0eXBlIjoiSnd0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpZGVudGl0eSI6IkhSIiwiaWQiOiIxIiwiZXhwIjoxNzA5NTk1MTQzfQ.vUXTwTW7PxQlpQyv_RporMDZO2-XMekQlDSPel444VM',
  'Authorization':Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IuadjuePiiIsImNsYXNzIjoyLCJhcHBseSI6MCwicmVzdWx0MSI6IiAgICAgICAgICAiLCJ1c2VybmFtZSI6IjEiLCJwYXNzd29yZCI6IiIsInByb2JsZW0iOm51bGwsInJlc3VsdDIiOm51bGwsInJlc3VsdDMiOm51bGwsInJlc3VsdDQiOm51bGwsInNlbGVjdDEiOiJBQUFBQSIsInNlbGVjdDIiOiJBQUFBQUFBIiwic2VsZWN0MyI6IkFBQUFBQUFBQSIsInNlbGVjdDQiOiJBQkNBQkNBQkNBIiwiaWF0IjoxNzAzNDI5MjM4LCJleHAiOjE3MDM4NjEyMzh9.g-Vpx_IaNxukqBd8UxcmH8pe7gJj2EdpyRS85L6bYeI',
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