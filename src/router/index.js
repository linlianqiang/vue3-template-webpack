// import VueRouter from 'vue-router'
import { createRouter,createWebHashHistory } from 'vue-router'
import routes from './router'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
