/**
 * @file:  src/stores/common
 * @description:公共方法
 * @date: 2024-06-12
 * @author: wanggaoxian
 */

import {defineStore} from 'pinia';

export const commonStore = defineStore('common', {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;

      console.log(this.isCollapse ,'===this.isCollapse ')
    },
  },
});