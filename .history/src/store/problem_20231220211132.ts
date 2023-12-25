import { defineStore } from 'pinia';

interface PersistenceState {
    titles: string[];
    questions: { number: string; text: string }[];
    options: string[][];
}

export const problem = defineStore({
    id: 'persistence',
    state: (): PersistenceState => ({
      titles: [],
      questions: [],
      options: [],
    }),
    getters: {
      getTitle(state) {
          return state.titles;
      },
      getQuestion(state) {
          return state.questions;
      },
      getOptions(state) {
        return state.options;
    },
    },
    actions: {
      setTitle(title: string) {
        this.titles.push(title);
      },
      setQuestion(question: { number: string; text: string }) {
        this.questions.push(question);
      },
      setOptions(options: string[]) {
        this.options.push(options);
      },
    },
    persist: {
      enabled: true, // 开启数据缓存
      strategies: [
        { storage: sessionStorage, paths: ["counter"] }, // counter字段用sessionStorage存储
        { storage: localStorage, paths: ["name"] }, // name 字段用localstorage存储
    ],

————————————————
版权声明：本文为CSDN博主「xtcyolo」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xtcyolo/article/details/131471136
      // strategies: [{
      //   key:'problem',
      //   storage: sessionStorage,  // 默认是sessionStorage
      //   paths:['titles'],
      // }],
    }
  });
  
