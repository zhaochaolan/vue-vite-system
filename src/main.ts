import { createApp } from 'vue'
import './style.css'
import * as ElementPlusIconVue from '@element-plus/icons-vue'
import App from './App.vue'
const app = createApp(App)
//挂载路由
import router from './router'
//状态管理
import { createPinia } from "pinia"
//引入element Plus css
import 'element-plus/dist/index.css'

//注册elementPlus图标
for(const [key,component] of Object.entries(ElementPlusIconVue)) {
	app.component(key,component)
}
import "@/style/index.scss";
app.use(router)
app.use(createPinia())
app.mount('#app')
