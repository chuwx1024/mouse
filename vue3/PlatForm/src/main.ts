import 'normalize.css/normalize.css'
import '@/assets/styles/index.less'
import "ant-design-vue/dist/antd.css"


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
