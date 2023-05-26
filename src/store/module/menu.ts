import { defineStore } from 'pinia'
// tabbar组件相关功能状态
export const useMenuStore = defineStore('menuStore', {
  state: () => {
    return {
      isFold: false, //存储左侧菜单是否折叠
      refresh: false, //存储是否刷新
    }
  },
})
