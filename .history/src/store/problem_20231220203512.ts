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
        this.questions.push(number+question);
      },
      saveOptions(options: string[]) {
        this.options.push(options);
      },
    },
    persist: {
        enabled: true, // 开启数据缓存
        strategies: [
            {
            key: 'myuser',
            storage: sessionStorage  // 默认是sessionStorage
            }
        ],
    }
  });
  
