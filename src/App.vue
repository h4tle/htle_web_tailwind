<template>
  <div class="bg-htle_yellow">
    <Sidebar />
    <Home />
    <!-- <Herosection /> -->

    <!-- <Navbar /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
import Home from "./views/Home.vue";
import Sidebar from "./components/Sidebar.vue";
// import Herosection from "./components/Herosection.vue";

export default {
  name: "App",
  components: {
    // Navbar,
    Home,
    Sidebar,
    // Herosection,
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