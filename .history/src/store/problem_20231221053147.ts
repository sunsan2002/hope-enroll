/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-20 14:25:05
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-21 05:31:11
 * @FilePath: \hope-enroll\src\store\problem.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';

interface PersistenceState {
    titles: string[]; 
    questions: { number: string; text: string }[];
    options: string[][];
    name:string;
    curtopic:string;
    curoptions: string[][];
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
      setCurOptions(curoption: string[]) {
        this.cu
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
  
