import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/reset.css'
import './assets/base.css'
import SvgIcon from './icons/index.js' // icon
import './utils/test'
import GlobalTemp from './components/globalTemp.js'
console.log('App', App)
const app = createApp(App)
app.use(SvgIcon)
app.use(GlobalTemp)
app.use(router)
app.use(store)
app.mount('#app')