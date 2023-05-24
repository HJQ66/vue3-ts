import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
// svg插件提供方法
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//按需导入相关插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//导入element-plus图标相关
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
//路径模块
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
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
      // 按需导入element-plus
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({ prefix: 'Icon' }),
        ],
      }),
      Components({
        resolvers: [
          //自动注册图标组件
          IconsResolver({ enabledCollections: ['ep'] }),
          ElementPlusResolver(),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
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
