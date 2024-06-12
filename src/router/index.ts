import {createRouter, createWebHistory} from 'vue-router';
import {isLoginStore} from '../store/isLogin';

// const loginStore = isLoginStore();


// console.log(loginStore,'=====loginStore')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      children: [],
      meta: {
        title: '首页',
      },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const whiteList = ['/login', '/home'];
  const loginStore = isLoginStore();
  // console.log(loginStore.isToken, '=====loginStore');
  if (whiteList.includes(to.path)) {
    next();
  } else {
    const isLogin = window.localStorage.getItem('token') || loginStore.isToken;
    if (!isLogin) {
      return next({
        path: '/login',
        query: {redirect: to.fullPath},
      });
    }
    next();
  }
});

export default router;
