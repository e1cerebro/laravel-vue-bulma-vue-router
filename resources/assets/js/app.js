/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component("app-header", require("./components/MyHeader.vue"));
//Vue.component("app-footer", require("./components/MyFooter.vue"));
import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(Vuex);

import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/about", component: About }
];

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: "history"
});

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        }
    }
});

const app = new Vue({
    el: "#app",
    components: {
        "app-header": MyHeader,
        "app-footer": MyFooter
    },
    router: router,
    store: store,
    created() {
        console.log("App instance was created");
    }
});