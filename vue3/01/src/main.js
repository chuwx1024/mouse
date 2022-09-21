import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入路由
import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
    {path: '/', component: () => import('./routeDemo/index.vue')},
    { path: '/test', component: () => import('./routeDemo/index.vue')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// createApp(App).mount('#app')
let app = createApp(App)
app.use(router)
app.mount('#app')
