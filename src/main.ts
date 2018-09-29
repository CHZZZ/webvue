import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css'

import { currencyFilter } from './currency'
Vue.use(iView)
Vue.filter('currency', currencyFilter)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
