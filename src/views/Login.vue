<template>
  <div class="container">
  <form @submit.prevent="Login" class="bg-blue text-center w-1/3 px-3 py-4 text-black mx-auto rounded">
  	<input v-model="email" type="text" placeholder="Username" class="block w-full mx-auto text-sm py-2 px-3 rounded" />
    <input v-model="password" type="text" placeholder="Password" class="block w-full mx-auto text-sm py-2 px-3 rounded my-3" />
    <button class="bg-blue text-black font-bold py-2 px-4 rounded border block mx-auto w-full">
      Login
    </button>
  </form>
</div>
</template>

<script>
import axios from "../axios/index.js";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data: function() {
    return { email: "", password: "" };
  },

  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async Login() {
      var vm = this;
      try {
        const params = new URLSearchParams();
        params.append("username", this.email);
        params.append("password", this.password);
        params.append("grant_type", "password");
        const response = await axios.post("/token", params, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        console.log(response);
        if (response.data.access_token != null) {
          sessionStorage.setItem("Token", response.data.access_token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.access_token;
          const user = await (await axios.get("/users/myuser")).data;
          this.$store.commit("setUser", user);

          // setTimeout(() => {
          await vm.$router.push("/UserPage");
          // }, 2000);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>

</style>