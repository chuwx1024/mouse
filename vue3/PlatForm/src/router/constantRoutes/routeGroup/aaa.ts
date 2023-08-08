export default [
    {
        path: '/mainAAA',
        name: 'Main',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'aaa'
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