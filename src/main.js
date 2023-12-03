import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import BootstrapVueNext from 'bootstrap-vue-next'
import "./assets/scss/bootstrap-custom.scss"
import 'animate.css';

createApp(App)
  .use(BootstrapVueNext)
  .use(router)
  .mount('#app')