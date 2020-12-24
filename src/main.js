import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/base.css'
import './permission.js'
import SvgIcon from './icons/index.js' // icon
import GlobalTemp from './components/globalTemp.js'
// 设计模式
import './utils/designMode'
// 数据结构与算法
import './utils/Algorithms'
const app = createApp(App)
app.use(SvgIcon)
app.use(GlobalTemp)
app.use(router)
app.use(store)
app.mount('#app')

