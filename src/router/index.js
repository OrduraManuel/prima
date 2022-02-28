import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Dashboard from "../pages/Dashboard.vue";
import signUp from "../pages/signUp.vue";
import logIn from "../pages/logIn.vue";

// firebase imports
import { auth } from '@/api/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if(!user) {
    next({ name: 'logIn'})
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
    path: "/signUp",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/logIn",
    name: "logIn",
    component: logIn,
  },];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
