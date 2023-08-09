export default [
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/Layout/LoginLayout/index.vue'),
        children: [
            {
                path: '/login',
                name: 'Login', 
                meta: {
                    title: 'Dataset'
                },
                component: () => import('@/views/Login/index.vue'),
            }
        ]
      },
]