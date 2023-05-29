import { defineConfig, loadEnv } from 'vite'
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
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  //获取不同环境下的环境变量
  const env = loadEnv(mode, process.cwd(), '')

  return {
    //代理跨域
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取当前环境下请求接口的地址
          target: env.VITE_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
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
