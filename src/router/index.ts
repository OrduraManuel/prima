import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import signUp from "../pages/signUp.vue";
import logIn from "../pages/logIn.vue";
import firstLog from "../pages/firstLog.vue";

// firebase imports
import { auth } from '../../src/api/config'

const requireAuth = (to: any, from: any, next: any) => {
  let user = auth.currentUser
  if(!user) {
    next({
      name: 'firstLog'
    })
  } else {
    next()
  }
}


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: requireAuth,
  },
  {
    path: "/firstLog",
    name: "firstLog",
    component: firstLog,
  },
    {
    path: "/signUp",
    name: "signUp",
    component: signUp,
    beforeEnter: requireAuth,
  },
  {
    path: "/logIn",
    name: "logIn",
    component: logIn,
    beforeEnter: requireAuth,
  },];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
