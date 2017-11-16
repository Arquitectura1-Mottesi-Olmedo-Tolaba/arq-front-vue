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
const AccademicOffer2 = require('./assets/js/components/accademicOffer2.vue');

const routes = [
    {
        name: 'all_products',
        path: '/',
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
        path: '/accademicOffer',
        component: AccademicOffer
    },
    {
        name: 'accademic_offer_form',
        path: '/accademicOffer2',
        component: AccademicOffer2
    }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
