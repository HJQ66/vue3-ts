import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
//获取应用实例对象
const app = createApp(App)
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件对象，注册项目全局组件
import globalComponents from '@/components'
//安装自定义插件
app.use(globalComponents)

//将应用挂载到挂载点上
app.mount('#app')
