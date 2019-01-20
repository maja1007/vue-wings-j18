import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

import players from '@/pages/players'
import create from '@/pages/create'
import edit from '@/pages/edit'

import login from '@/views/login'

Vue.use(Router)

/*
const base =
  process.env.NODE_ENV === "production"
    ? "/j-18-client/"
    : "/";
*/
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/players',
      name: 'players',
      component: players
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
