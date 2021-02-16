<template>
  <div
    @click.self="this.$store.dispatch('toggleShowRegister')"
    class="bg-gray-500 bg-opacity-40 fixed top-0 left-0 w-screen h-screen"
  >
    <div class="bg-white mx-auto max-w-md mt-12">
      <form
        @submit.prevent="Register"
        method="Register"
        class="bg-blue text-center w-1/3 px-3 py-4 text-black mx-auto rounded"
      >
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          placeholder="Email"
          class="block w-full mx-auto text-sm py-2 px-3 rounded"
        />
        <label for="password">Adgangskode</label>
        <input
          v-model="password"
          type="text"
          placeholder="Password"
          class="block w-full mx-auto text-sm py-2 px-3 rounded my-3"
        />
        <label for="firstName">Fornavn</label>
        <input
          v-model="firstName"
          placeholder="Anne"
          id="firstName"
          type="text"
        />
        <button
          type="submit"
          class="bg-blue text-black font-bold py-2 px-4 rounded border block mx-auto w-full"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "../axios/index.js";

export default {
  name: "Register",
  data: function () {
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