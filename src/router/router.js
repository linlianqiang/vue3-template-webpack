
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
    component: () => import(/* webpackChunkName: "about" */ '../views/release/index.vue')
  },
  {
    path: '/focu',
    name: 'focu',
    component: () => import( '../views/focu/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/userCenter/index.vue')
  }
]

export default route