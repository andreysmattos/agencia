/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import store from "./store";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// CONFIGS
// Vue.component('and-config', require('./components/startpack/header/container/and-config.vue'));
Vue.component('and-config', require('./components/startpack/header/container/and-config.vue').default);



// CONTAINER
Vue.component('and-block-icon', require('./components/startpack/block/container/and-block-icon.vue').default);
Vue.component('and-master-footer', require('./components/startpack/footer/container/and-master-footer.vue').default);
Vue.component('and-contact', require('./components/startpack/contact/container/and-contact.vue').default);
Vue.component('and-menu-edit', require('./components/startpack/temp/container/and-menu-edit.vue').default);

// PRESENTATION
Vue.component('and-pres-master-footer', require('./components/startpack/footer/presentation/and-pres-master-footer.vue').default);
Vue.component('and-pres-contact', require('./components/startpack/contact/presentation/and-pres-contact.vue').default);
Vue.component('and-pres-block-image-left', require('./components/startpack/block/presentation/and-pres-block-image-left.vue').default);
Vue.component('and-pres-block-image-right', require('./components/startpack/block/presentation/and-pres-block-image-right.vue').default);
Vue.component('and-pres-list-menu', require('./components/startpack/temp/presentation/and-pres-list-menu.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
	store,
    el: '#app',
});
