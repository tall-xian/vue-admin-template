/**
 * @file:  src/router/modules/home
 * @description:home路由文件
 * @date: 2024-06-12
 * @author: wanggaoxian
 */

import {RouteRecordRaw} from 'vue-router';

export const HomeRouter: RouteRecordRaw = {
  path: '/',
  component: () => import('@/views/layout/index.vue'),
  redirect: '/home',
  meta: {icon: 'Guide', title: '仪表盘', alwaysShow: true},
  children: [
    {
      path: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {icon: 'Guide', title: '首页', hideMenu: true},
    },
    {
      path: 'system',
      component: () => import('@/views/system/index.vue'),
      meta: {icon: 'Guide', title: '首页', hideMenu: true},
    },
  ],
};