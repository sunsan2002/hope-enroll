/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:51:58
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-11-05 21:06:27
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\api.ts
 * @Description: 封装接口
 */
import http from "./axios.js";

let apiFun = {
  // 自定义对象，命名隔离，消除重名影响
  user: {},
  test: {},
};

// 测试接口（按需添加，可删）
apiFun.test = {
  test: () => {
    return http.get(`/resume/testES`);
  },
};
