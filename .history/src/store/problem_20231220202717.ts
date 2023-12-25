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
    },
     // 注意这里报错 // 没有与此调用匹配的重载
  persist: {
    storage: localStorage
  }
  });
  
