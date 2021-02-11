<template>
  
</template>

<script>
import { mapMutations } from "vuex";
import axios from "../axios/index.js";

export default {
  name: "Register",
  data: function() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNo: "",
    };
  },

  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async Register() {
      var user = JSON.stringify({
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.email,
        PhoneNo: this.phoneNo,
        Password: this.password,
      });
      await axios.post("/users", user);
      this.$router.push("/Login");
    },
  },
};
</script>

<style>

</style>