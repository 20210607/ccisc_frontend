import { createApp } from 'vue'
import App from './App.vue'

import router from './router'// 引入Vue Router
import ElementPlus from 'element-plus' // 引入Element Plus
import 'element-plus/dist/index.css' // 引入Element Plus的CSS文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入Element Plus的图标库
import './assets/global.css' // 引入全局样式
import { createPinia } from 'pinia' // 引入Pinia

import * as echarts from 'echarts'
import theme from '@/assets/westeros.json'

echarts.registerTheme('theme', theme);

const app = createApp(App) // 创建Vue实例
const pinia = createPinia() // 创建Pinia实例

// 注册Element Plus的图标库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router) //将Vue Router添加到应用中。让整个应用都能够使用路由功能。
app.use(ElementPlus); // 使用Element Plus
app.use(pinia) // 使用Pinia

app.mount('#app')
