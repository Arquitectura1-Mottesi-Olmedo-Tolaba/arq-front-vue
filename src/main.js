import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import SuiVue from 'semantic-ui-vue';

// global register
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(SuiVue);

import App from './App.vue'

const HomePage = require('./assets/js/components/homePage.vue');
// Student
const AccademicOffer = require('./assets/js/components/accademicOffer.vue');
const SubmitPage = require('./assets/js/components/submitPage.vue');
// Director
const DashboardDegree = require('./assets/js/components/dashboardDegree.vue');
const EditDegree = require('./assets/js/components/editDegree.vue');
const DegreeInformation = require('./assets/js/components/degreeInformation.vue');
const DashboardAcademicOffer = require('./assets/js/components/directorView/dashboardAcademicOffer.vue');

const routes = [
  {
    name: 'homePage',
    path: '/',
    component: HomePage
  },
  {
    name: 'accademic_offer_form',
    path: '/accademicOffer/:id',
    component: AccademicOffer
  },
  {
    name: 'submit_form_page',
    path: '/submitPage',
    component: SubmitPage
  },
  {
    name: 'dashboard_degree',
    path: '/dashboard',
    component: DashboardDegree
  },
  {
    name: 'edit_degree',
    path: '/editDegree/:id',
    component: EditDegree
  },
  {
    name: 'degree',
    path: '/degree/:id',
    component: DashboardAcademicOffer
  }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
