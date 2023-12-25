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
        console.log(state.titles)
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
        { storage: sessionStorage, paths: ["titles"] },
    ],
      // strategies: [{
      //   key:'problem',
      //   storage: sessionStorage,  // 默认是sessionStorage
      //   paths:['titles'],
      // }],
    }
  });
  
