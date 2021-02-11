// import Vue from "vue";
import {createWebHistory, createRouter} from "vue-router";
import Login from "@/views/Login";
import Users from "@/views/Users";
import Home from "@/views/Home";
import Register from "@/views/Register";
import UserPage from "@/views/UserPage";
// import Login from '../views/Login';

Vue.use(VueRouter);

// https://router.vuejs.org/guide/

const routes = [
  
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/Users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
