import { defineStore } from 'pinia';

interface FirstStoreState {
  token: string;
  id: string;
  username: string;
  name: string;
}

export const problems = defineStore('persistence', {
  state: (): FirstStoreState => {
    return {
        titles: [],
        questions: [],
        options: [],
    };
  },
  getters: {
    // 在需要的时候添加你的 getter
  },
  actions: {
    // 在需要的时候添加你的 action
  },
});
export const usePersistenceStore = defineStore({
    id: 'persistence',
    state: () => ({
      titles: [],
      questions: [],
      options: [],
    }),
    actions: {
      saveTitle(title) {
        this.titles.push(title);
      },
      saveQuestion(question) {
        this.questions.push(question);
      },
      saveOptions(options) {
        this.options.push(options);
      },
    },
  });
