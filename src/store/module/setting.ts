import { defineStore } from 'pinia'
import {
  GET_THEAMCOLOR,
  SET_THEAMCOLOR,
  GET_ISDARK,
  SET_ISDARK,
} from '@/utils/getLocalData'
export const useSettingStore = defineStore('settingStore', {
  state: () => {
    return {
      theamColor: GET_THEAMCOLOR() || '#409EFF',
      isDark: Boolean(JSON.parse(GET_ISDARK() as string)) || false,
    }
  },
  actions: {
    setTheamColor(color: string) {
      SET_THEAMCOLOR(color)
      const el = document.documentElement
      //获取css变量
      getComputedStyle(el).getPropertyValue(`--el-color-primary`)
      //设置css变量
      el.style.setProperty(`--el-color-primary`, color)
    },
    setIsDark(isDark: boolean) {
      SET_ISDARK(JSON.stringify(isDark))
      const el = document.documentElement
      isDark ? (el.className = 'dark') : (el.className = '')
    },
  },
})
