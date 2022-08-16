const routes = [
  {
      path: '/',
      component: import('../pages/HomePage.vue'),
  },
  {
    path: '/movie-detail',
    name: 'MovieDetail',
    component: import('../pages/MovieDetail.vue')
  }
]

export default routes;