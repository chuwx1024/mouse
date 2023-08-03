import { createRouter, createWebHistory } from 'vue-router'


    const routes = [
        {
            path: '/123',
            name: 'Layout',
            component: () => import('@/App.vue')
        }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes
    })


