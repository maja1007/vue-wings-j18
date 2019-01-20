import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

import home from '@/pages/home'
import show from '@/pages/show'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: "no-sidebar" },
      component: require("@/pages/home.vue").default // load sync home
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("@/pages/about.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
})
