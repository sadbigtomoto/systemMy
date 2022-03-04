import { createApp } from 'vue'
import App from './App.vue'
import './service/axios_demo'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
