import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path';
//组件自动按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//mock数据
import { viteMockServe } from 'vite-plugin-mock'
import { fa } from 'element-plus/es/locale';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers:[ElementPlusResolver()]
    }),
    Components({
      resolvers:[ElementPlusResolver()]
    }),
		viteMockServe({
			mockPath:'./mock',
			supportTs:false,
			logger:false
		})
  ],
  resolve:{
    alias:{
      '@': resolve(__dirname,'src') //设置"@"指向src目录
    }
  },
  base:'./',//设置打包路径
  //打包设置
  build:{
    outDir:"dist",
    assetsDir:"assets",
    sourcemap:false,
    terserOptions:{
      //生产环境移除console打印
      compress:{
        drop_console:true,
        drop_debugger:true
      },
      //去掉注释
      output:{
        comments:true
      }
    }
  },
  server:{
    port:8080,//服务器启动端口
    open:true,//自启动浏览器
    cors:true, //允许跨域
    //设置代理
    proxy:{
      '/api':{
        target:'',
        changeOrigin:true,//支持跨域
        secure:false,
        rewrite:(path) => path.replace('/api/','/')
      }
    }
  }

})
