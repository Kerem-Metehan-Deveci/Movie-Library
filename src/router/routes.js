const routes = [
  {
      path: '/',
      component: import('../pages/HomePage.vue'),
  },
  {
    path: '/movie-detail',
    component: import('../pages/MovieDetailPage.vue')
  }
]

export default routes;