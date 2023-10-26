import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'auth',
        component: () => import('@/pages/Auth/Auth.vue')
    },

    {
        path: '/main',
        name: 'main',
        component: () => import('@/layouts/AppLayout.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/pages/Dashboard/Dashboard.vue'),
            }

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;