/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-12 20:47:51
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-20 20:23:01
 * @FilePath: \hope-enroll\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';

interface FirstStoreState {
  token: string;
  id: string;
  username: string;
  name: string;
}

export const user = defineStore('first', {
  state: (): FirstStoreState => {
    return {
      token: '',
      id: '',
      username: '',
      name: '测试用户',
    };
  },
  getters: {
    // 在需要的时候添加你的 getter
  },
  actions: {
    // 在需要的时候添加你的 action
  },
  persist: true,
});

export const problem = defineStore({
  id: 'first',
  state: (): FirstStoreState => ({
    titles: [],
    questions: [],
    options: [],
  }),
  actions: {
    saveTitle(title: string) {
      this.titles.push(title);
    },
    saveQuestion(question: { number: string; text: string }) {
      this.questions.push(question);
    },
    saveOptions(options: string[]) {
      this.options.push(options);
    },
    persist: true,
  },
});
