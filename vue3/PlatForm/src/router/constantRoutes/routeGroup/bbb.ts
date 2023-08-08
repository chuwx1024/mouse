export default [
    {
        path: '/mainBBB',
        name: 'Main',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'mainbbb'
        },
        children: [
            {
                path: '/mainBBB/bbb',
                name: 'BBB',
                component: () => import('@/views/bbb/index.vue'),
            }
        ]
    }
]