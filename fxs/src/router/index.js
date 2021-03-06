import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import qmtrouter from"../views/qmt/router.js"

import hzhrouter from "../views/hzh/hzhRouter.js"
import cylrouter from "../views/cyl/cylrouter.js";
import ytrouter from"../views/yt/ytrouter.js"
import zyprouter from "../views/zyp/zyprouter.js";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",

    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  ...hzhrouter,
  ...cylrouter,

  ...qmtrouter,

  ...ytrouter,
  ...zyprouter,


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
