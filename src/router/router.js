
const route = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    // redirect: '/home',
    // children:[
    //   {
    //     path: '/home',
    //     name: '介绍',
    //     meta: {
    //       hidden: true,
    //     },
    //     component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
    //   }
    // ]
  },
  {
    path: '/release',
    name: 'release',
    component: () => import(/* webpackChunkName: "about" */ '../views/release.vue')
  },
  {
    path: '/focus',
    name: 'focus',
    component: () => import(/* webpackChunkName: "about" */ '../views/focus/index.vue')
  }
]

export default route