import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import pinia from '@/plugins/pinia';
import naive from '@/plugins/naive';
import '@/assets/scss/bootstrap.scss'

createApp(App)
  .use(router)
  .use(naive)
  .use(pinia)
  .mount('#app')
