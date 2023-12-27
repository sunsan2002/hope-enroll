/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:51:58
 * @LastEditors: sunsan 2390864551@qq.com
 * @LastEditTime: 2023-12-27 15:32:20
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\api.ts
 * @Description: 封装接口
 */
import http from "./axios";

// 定义接口，描述 apiFun 对象的结构
interface ApiFun {
  user: {
    login: (params: { username: string; password: string }) => Promise<any>;
    getUser: () => Promise<any>;
    submit: (params: { select:number|null; answer: string}) => Promise<any>;
  };
  test: {
    test: () => Promise<any>;
  };
}

// 创建 apiFun 对象，并指定其类型为 ApiFun
const apiFun: ApiFun = {
  user: {
    login: (params) => {
      return http.post(`/login?username=${params.username}&password=${params.password}`);
    },
    getUser: () => {
      return http.get(`/getUser`);
    },
    submit: (params) => {
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