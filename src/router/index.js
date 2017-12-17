import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/homePage/homePage.vue';
// Student
import AcademicOffer from '@/components/studentView/academicOffer.vue';
import SubmitPage from '@/components/studentView/submitPage.vue';
// Director
import DashboardDegree from '@/components/directorView/dashboardDegree.vue';
import DirectorHomePage from '@/components/directorView/directorHomePage.vue';

Vue.use(Router)

export default new Router({
  routes: [
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
  ]
})
