import { defineStore } from 'pinia';

interface FirstStoreState {
  token: string;
  id: string;
  username: string;
  name: string;
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
  
