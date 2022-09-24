import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 引入pinia


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
    },
    {
        path: '/main',
        name: 'mainPage',
        component: () => import('./routeDemo/index.vue'),
        children: [
            {
                path: '/main/page1',
                name: 'main/page1',
                component: () => import('./routeDemo/page1.vue')
            },
            {
                path: '/main/page2',
                name: 'main/page2',
                component: () => import('./routeDemo/page2.vue')
            }
        ]
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
