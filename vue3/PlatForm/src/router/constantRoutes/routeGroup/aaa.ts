export default [
    {
        path: '/mainAAA',
        name: 'Main',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'A页面'
        },
        children: [
            {
                path: '/mainAAA/aaa',
                name: 'AAA',
                component: () => import('@/views/aaa/index.vue'),
            }
        ]
    }
]