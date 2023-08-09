export default [
    {
        path: '/mainCCC',
        name: 'CCC',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'C页面'
        },
        children: [
            {
                path: '/mainCCC',
                name: 'CCC',
                component: () => import('@/views/ccc/index.vue'),
            }
        ]
    }
]