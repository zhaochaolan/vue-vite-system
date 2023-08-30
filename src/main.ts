import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//挂载路由
import router from './router'
//状态管理
import { createPinia } from "pinia"
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
