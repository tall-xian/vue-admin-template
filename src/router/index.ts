// import {Dashboard} from './modules/dashboard';
import {createRouter, createWebHistory} from 'vue-router';
// import {routes} from "vue-router/auto-routes";

//这里可以根据权限做动态路由
// component: () => import('@/views/common/Login.vue'),
//     meta: {title: '登录', hideTabs: true},
// },
// {
//     path: '/home',
//         component: () => import('@/views/home/index.vue'),
//     meta: {icon: 'Guide', title: '仪表盘', alwaysShow: true},
// },
// {
//     path: '/system',
//         component: () => import('@/views/system/index.vue'),
//     meta: {icon: 'Guide', title: '仪表盘', alwaysShow: true},
// },const menuRoute: RouteRecordRaw[] = [
//     {
//         path: '/login',

// {
//     path: '/',
//     component: () => import('@/views/layout/index.vue'),
//     redirect: '/home',
//     meta: {icon: 'Guide', title: '仪表盘', alwaysShow: true},
//     children: [
//         {
//             path: 'home',
//             component: () => import('@/views/home/index.vue'),
//             meta: {icon: 'Guide', title: '首页', hideMenu: true},
//         },
//         {
//             path: 'system',
//             component: () => import('@/views/system/index.vue'),
//             meta: {icon: 'Guide', title: '首页', hideMenu: true},
//         },
//     ]
// }
// ]
// ;


const whiteList: string[] = ['/login'];//不需要登录也能查看的路由,最少需要'/login'，要不然会一直重定向到login
//
// const router = createRouter({
//   history: createWebHistory(),
//   routes: [...menuRoute, ...Common],
// });
// export {menuRoute, whiteList};
// export default router;

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [...menuRoute],
// });

// router.beforeEach((to, _from, next) => {
//     console.log([...menuRoute, ...Common], '====[...menuRoute, ...Common]');
//     // const whiteList = ['/login'];
//     // const loginStore = isLoginStore();
//     // console.log(loginStore.isToken, '=====loginStore');
//     // if (whiteList.includes(to.path)) {
//     //   next();
//     // } else {
//     //   const isLogin = window.localStorage.getItem('token'); //|| loginStore.isToken;
//     //   if (!isLogin) {
//     //     return next({
//     //       path: '/login',
//     //       query: {redirect: to.fullPath},
//     //     });
//     //   }
//     //   next();
//     // }
//     next()
// });

const menuRoute = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {title: '登录', icon: 'Guide',}
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/common/login.vue'),
        meta: {title: '登录', icon: 'Guide',}
    }, {
        path: '/system',
        name: 'system',
        component: () => import('@/views/system/index.vue'),
        meta: {title: '登录', icon: 'Guide',}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: menuRoute,
})

// export {menuRoute, whiteList};
export default router;





