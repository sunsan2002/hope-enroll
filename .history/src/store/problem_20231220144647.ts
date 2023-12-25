import { defineStore } from 'pinia';

interface PersistenceState {
titles: string[];
questions: { number: number; text: string }[];
options: string[][];
}

export const usePersistenceStore = defineStore({
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
      saveQuestion(question: { number: number; text: string }) {
        this.questions.push(question);
      },
      saveOptions(options: string[]) {
        this.options.push(options);
      },
    },
  });
  
