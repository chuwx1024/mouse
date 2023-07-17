import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { directivePlugin } from '@/directives/index.js'
import { componentPlugin } from '@/components/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(directivePlugin)
app.use(componentPlugin)

app.mount('#app')


