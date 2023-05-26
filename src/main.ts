import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
//获取应用实例对象
const app = createApp(App)
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象，注册项目全局组件
import globalComponents from '@/components'
//导入路由
import router from '@/router'
//引入仓库
import pinia from './store'
//引入element-ui的所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入路由鉴权
import './permission'
// 遍历使用所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//安装自定义插件
app.use(globalComponents)
//使用仓库
app.use(pinia)
//使用路由
app.use(router)
//将应用挂载到挂载点上
app.mount('#app')
