/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:50:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-20 20:22:16
 * @FilePath: \hopeEnroll\hope_enroll\src\main.ts
 * @Description: 项目的文件入口，进行实例化Vue，赋值项目中经常会用到的插件和CSS样式以及存储全局变量
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import './store/store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import './styles/element-plus.scss'
import 'animate.css'
import './styles/index.scss'
// import locale from 'element-plus/lib/locale/lang/zh-cn';
import './assets/main.css'
import { observe } from './utils/directives';


// 生成 Vue 实例 app
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.directive("observe", observe);



// 全局导入icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$http = axios

// 挂载到Vue根实例
app.mount('#app')
