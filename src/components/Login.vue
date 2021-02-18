<template>
  <div
    @click.self="this.$store.dispatch('toggleShowLogin')"
    class="bg-gray-500 bg-opacity-40 fixed top-0 left-0 w-screen h-screen"
  >
    <Close class="fixed w-12 text-red-700" />

    <div class="bg-white mx-auto max-w-md mt-12">
      <form
        @submit.prevent="Login"
        class="bg-blue text-center w-1/3 px-3 py-4 text-black mx-auto rounded"
      >
        <input
          v-model="email"
          type="text"
          placeholder="Email"
          class="block w-full mx-auto text-sm py-2 px-3 rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
        />
        <button
          class="bg-blue text-black font-bold py-2 px-4 rounded border block mx-auto w-full"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Close from "../assets/svg/close.svg";

import axios from "../axios/index.js";
import { mapMutations } from "vuex";
export default {
  components: {
    Close,
  },
  name: "Login",
  data: function () {
    return { email: "", password: "" };
  },

  methods: {
    ...mapMutations([, "setToken"]),
    async Login() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: this.email,
        password: this.password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
        // body: JSON.stringify(data),
      };

      fetch("http://lvh.me:3007/api/user/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>

<style>
</style>