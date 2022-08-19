const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../pages/HomePage.vue'),
    },
    {
        path: '/movie-detail/:id?',
        name: 'MovieDetailPage',
        component: () => import('../pages/MovieDetailPage.vue'),
        props: true,
    },
    {
        path: '/error',
        name: 'ErrorPage',
        component: () => import('../pages/ErrorPage.vue'),
    },
];

export default routes;