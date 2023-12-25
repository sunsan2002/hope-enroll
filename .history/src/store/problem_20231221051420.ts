import { defineStore } from 'pinia';

interface PersistenceState {
    titles: string[]; 
    questions: { number: string; text: string }[];
    options: string[][];
    name:string;
    curtopic:string;
    curoptions: { label: string; text: string }[];
    curans:string;
    ans: { number: string; text: string }[];
}

export const problem = defineStore('persistence',{
    state: (): PersistenceState => {
      return {
        titles: [],
        questions: [],
        options: [],
        name:'',
        curtopic:'',
        curoptions:[],
        curans:'',
        ans: [],
      };
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
      setCurOptions(curoption: { label: string; value: string }) {
        console.log(curoption);
        // curoptions.value.slice(0, curoptions.value.length);
        this.curoptions.push(curoption);
      },
    },
    persist: {
      enabled: true, // 开启数据缓存
      strategies: [{
        key:'problem',
        storage: sessionStorage,  // 默认是sessionStorage
        // paths:['titles'],
      }],
    }
  });
  
