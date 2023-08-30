import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
