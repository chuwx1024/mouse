import 'normalize.css/normalize.css'
import '@/assets/styles/index.less'
import "ant-design-vue/dist/antd.css"
import '@/utils/mock.js'
import  * as antIcon  from '@ant-design/icons-vue'
const antIcons:any = antIcon


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { message } from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

Object.keys(antIcons).forEach(item => {
    app.component(item, antIcons[item])
})

// 注册全局变量
app.config.globalProperties.$message = message

app.use(createPinia())
app.use(router)

app.mount('#app')
