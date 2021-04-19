<template>
  <Sidebar />

  <div class="bg-htle_yellow ml-12">
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
  <!-- <Login v-show="this.$store.state.showLogin" />
  <Register v-show="this.$store.state.showRegister" /> -->
</template>

<script>
import Home from "./views/Home.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default {
  name: "App",
  components: {
    Home,
    Sidebar,
    Footer,
    Login,
    Register,
  },
  methods: {
    GetToken() {
      console.log(sessionStorage.getItem("Token"));
    },
  },
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>