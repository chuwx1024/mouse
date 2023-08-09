export default [
    {
        path: '/mainBBB',
        name: 'Main',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'B页面'
        },
        children: [
            {
                path: '/mainBBB/bbb',
                name: 'BBB',
                meta: {
                    title: 'B页面111'
                },
                component: () => import('@/views/bbb/index.vue'),
            },
            {
                path: '/mainBBB/bbb2',
                name: 'bbb2',
                meta: {
                    title: 'B页面222'
                },
                component: () => import('@/views/bbb/index.vue'),
            }
        ]
    }
]