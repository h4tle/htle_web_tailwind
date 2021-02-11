// import Vue from "vue";
import {createWebHistory, createRouter} from "vue-router";
import Login from "../views/Login.vue";
import Users from "../views/Users.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import UserPage from "../views/UserPage.vue";
// import Login from '../views/Login';

// https://router.vuejs.org/guide/


export default createRouter({
  history: createWebHistory(),
  routes: [
    
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
  ]
});

// export default router;
