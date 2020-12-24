
const route = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
    },
    {
        path: '/release',
        name: 'release',
        component: () => import(/* webpackChunkName: "realease" */ '../views/release/index.vue')
    },
    {
        path: '/focu',
        name: 'focu',
        component: () => import(/* webpackChunkName: "focu" */ '../views/focu/index.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "users" */ '../views/userCenter/index.vue')
    }
]

export default route