import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users";
import Home from "../views/Home";
import Register from "../views/Register";
import UserPage from "../views/UserPage";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/

const routes = [
  
  {
    path: "/UserPage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
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
    path: "/Users",
    name: "Users",
    component: Users,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
