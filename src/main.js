import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './plugins/pinia';
import naive from './plugins/naive';

createApp(App)
  .use(router)
  .use(naive)
  .use(pinia)
  .mount('#app')
