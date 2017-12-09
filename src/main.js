import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import SuiVue from 'semantic-ui-vue';

// global register
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(SuiVue);

import App from './App.vue'

const HomePage = require('./assets/js/components/homePage/homePage.vue');
// Student
const AcademicOffer = require('./assets/js/components/studentView/academicOffer.vue');
const SubmitPage = require('./assets/js/components/studentView/submitPage.vue');
// Director
const DashboardDegree = require('./assets/js/components/directorView/dashboardDegree.vue');
const DirectorHomePage = require('./assets/js/components/directorView/directorHomePage.vue');

const routes = [
  {
    name: 'homePage',
    path: '/',
    component: HomePage
  },
  {
    name: 'academic_offer_form',
    path: '/academicOffer/:id',
    component: AcademicOffer
  },
  {
    name: 'submit_form_page',
    path: '/submitPage',
    component: SubmitPage
  },
  {
    name: 'dashboard_degree',
    path: '/dashboard',
    component: DirectorHomePage
  }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
