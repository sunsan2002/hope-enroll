/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:51:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-24 21:02:58
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\api.ts
 * @Description: 封装接口
 */
import http from "./axios";

// 定义接口，描述 apiFun 对象的结构
interface ApiFun {
  user: {
    login: (params: { username: string; password: string }) => Promise<any>;
    getUser: () => Promise<any>;
    submit: (params: { select:number|nu; answer: string}) => Promise<any>;
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
    getUser: () => {
      return http.get(`/getUser`);
    },
    submit: (params) => {
      console.log("要存的信息:")
      console.log(params);
      return http.put('/user/update',params);
    },
  },
  test: {
    test: () => {
      return http.get(`/resume/testES`);
    },
  },
};

export default apiFun;