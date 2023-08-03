import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// import path from 'path'

// function resovle (dir) {
//   return path.resovle(__dirname, './', dir)
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 解析
  resolve: {
    alias: {
      '@': '/src'
    }
  }
  
})
