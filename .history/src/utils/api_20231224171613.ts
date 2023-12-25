/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:51:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-24 17:16:13
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\api.ts
 * @Description: 封装接口
 */
import http from "./axios";

// 定义接口，描述 apiFun 对象的结构
interface ApiFun {
  user: {
    login: (params: { username: string; password: string }) => Promise<any>;
    getUser: (params: { token: string}) => Promise<any>;
  };
  test: {
    test: () => Promise<any>;
  };
}

// 创建 apiFun 对象，并指定其类型为 ApiFun
const apiFun: ApiFun = {
  user: {
    login: (params) => {
      console.log("发请求咯")
      return http.post(`/login?username=${params.username}&password=${params.password}`);
    },
    getUser: (params) => {
      return http.post(`/getUser?token=${params.token}`);
    },
    submit: (params) => {
      return http.post(`/update`+params);
    },
  },
  test: {
    test: () => {
      return http.get(`/resume/testES`);
    },
  },
};

export default apiFun;