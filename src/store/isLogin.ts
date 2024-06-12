import {defineStore} from 'pinia';

export const isLoginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      isToken: false,
    };
  },
  //整个仓库持久化存储
  // persist: {
  //   enabled: true,
  //   //指定字段存储，并且指定存储方式：
  //   strategies: [
  //     {storage: sessionStorage, paths: ['count', 'age']}, // age 和 count字段用sessionStorage存储
  //     {storage: localStorage, paths: ['accessToken']}, // accessToken字段用 localstorage存储
  //   ],
  // },
});

