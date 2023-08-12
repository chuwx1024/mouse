import 'normalize.css/normalize.css'
import '@/assets/styles/index.less'
import "ant-design-vue/dist/antd.css"
import '@/utils/mock.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { message } from 'ant-design-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 注册全局变量
app.config.globalProperties.$message = message

app.use(createPinia())
app.use(router)

app.mount('#app')
