import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
// svg插件提供方法
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      //配置svg图标相关插件方法
      createSvgIconsPlugin({
        //svg图标需要存放的文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      //配置mock数据相关插件
      viteMockServe({
        localEnabled: command === 'serve', //保证开发阶段能使用mock接口
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    // scss全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
