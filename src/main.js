import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import SuiVue from 'semantic-ui-vue';
import VueCookie from 'vue-cookie';

// global register
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(SuiVue);
Vue.use(VueCookie);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
