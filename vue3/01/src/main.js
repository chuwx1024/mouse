import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

let routes = [
    {path: '/', redirect: '/home'},
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('./Father.vue')
    },
    { 
        path: '/test', 
        name: 'testDemo',
        component: () => import('./routeDemo/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// createApp(App).mount('#app')
let app = createApp(App)
app.use(router)
app.mount('#app')
