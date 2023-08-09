export default [
    {
        path: '/mainAAA',
        name: 'AAA',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'A页面'
        },
        children: [
            {
                path: '/mainAAA',
                name: 'AAA',
                component: () => import('@/views/aaa/index.vue'),
            }
        ]
    }
]