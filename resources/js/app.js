/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import router from './router'
import EventBus from './event-bus'

window.EventBus = EventBus

window.not_found = function() {
    console.log(`Not found: ${router.currentRoute.fullPath}`)

    router.replace('/404')
}

window.not_found_unless = function (condition) {
    if(! condition) {
        not_found()
    }
}

Vue.component('app-component', require('./App.vue').default);
Vue.component('app-icon', require('./components/Icon.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
