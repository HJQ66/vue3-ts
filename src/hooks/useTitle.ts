import { watch } from 'vue'
import { useRoute } from 'vue-router'
//自定义hooks监听路由的变化 动态改变标题
export default function () {
  const $route = useRoute()
  watch(
    () => $route.path,
    () => {
      document.title = $route.meta.title
        ? ($route.meta.title as string)
        : '小黄后台管理系统'
    },
    { immediate: true },
  )
}
