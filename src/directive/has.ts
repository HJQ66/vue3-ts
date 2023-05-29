//获取store中当前用户的按钮权限数据
import pinia from '@/store'
import { useUserStore } from '@/store/module/user'
const userStore = useUserStore(pinia)
//在main.ts中全局引入,传入app，需要app
export const isHasButton = (app: any) => {
  // 自定义指令，用于控制按钮权限
  app.directive('has', {
    //代表使用这个全局自定义指令的DOM | 组件挂载完毕的时候会执行一次
    mounted(el: any, binding: any) {
      //el表示当前DOM元素
      //binding.value:获取传过来的值
      if (userStore.buttons.indexOf(binding.value) === -1) {
        //如果后端返回的权限中，没有包含该按钮权限，则移除该按钮
        el.parentNode.removeChild(el)
      }
    },
  })
}
