import '@/assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'animate.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
// 导入全局路由守卫
import '@/permission'


const pinia = createPinia()
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.mount('#app')
