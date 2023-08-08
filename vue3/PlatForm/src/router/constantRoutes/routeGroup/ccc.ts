export default [
    {
        path: '/mainCCC',
        name: 'Main',
        component: () => import('@/Layout/BasicLayout.vue'),
        meta: {
            title: 'mainccc'
        },
        children: [
            {
                path: '/mainCCC/ccc',
                name: 'CCC',
                component: () => import('@/views/ccc/index.vue'),
            }
        ]
    }
]