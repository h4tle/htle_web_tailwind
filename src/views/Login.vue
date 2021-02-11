<template>
  
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