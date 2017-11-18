import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import SuiVue from 'semantic-ui-vue';
//import 'semantic-ui-css/semantic.min.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(SuiVue);

import App from './App.vue'

const AllProducts = require('./assets/js/components/all-products.vue');
const CreateProduct = require('./assets/js/components/create-product.vue');
const EditProduct = require('./assets/js/components/edit-product.vue');
const DeleteProduct = require('./assets/js/components/delete-product.vue');
const AccademicOffer = require('./assets/js/components/accademicOffer.vue');
const SubmitPage = require('./assets/js/components/submitPage.vue');
const HomePage = require('./assets/js/components/homePage.vue');

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'allProducts',
        path: '/dashboard',
        component: AllProducts
    },
    {
        name: 'create_product',
        path: '/products/create',
        component: CreateProduct
    },
    {
        name: 'edit_product',
        path: '/products/edit/:id',
        component: EditProduct
    },
    {
        name: 'delete_product',
        path: '/products/delete/:id',
        component: DeleteProduct
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
    }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
