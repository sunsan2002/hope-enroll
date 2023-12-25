import { defineStore } from 'pinia';

interface FirstStoreState {
  token: string;
  id: string;
  username: string;
  name: string;
}

export const useFirstStore = defineStore('first', {
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
});

