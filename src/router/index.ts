import {Common} from './modules/common';
import {Dashboard} from './modules/dashboard';
import {System} from './modules/sysyem';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

//这里可以根据权限做动态路由
const menuRoute: RouteRecordRaw[] = [
  Dashboard,
  System,
];


const whiteList: string[] = ['/login'];//不需要登录也能查看的路由,最少需要'/login'，要不然会一直重定向到login

const router = createRouter({
  history: createWebHistory(),
  routes: [...menuRoute, ...Common],
});
export {menuRoute, whiteList};
export default router;



