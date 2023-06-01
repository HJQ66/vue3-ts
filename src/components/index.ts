//导入全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
//汇总所有全局组件
const allGloablComponent: any = { SvgIcon }
//对外暴露插件对象
export default {
  //务必叫install方法
  install(app: any) {
    //注册项目当中全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      //注册为全局组件
      app.component(key, allGloablComponent[key])
    })
  },
}
