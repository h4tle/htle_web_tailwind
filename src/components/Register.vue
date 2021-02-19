<template>
  <div
    @click.self="this.$store.dispatch('toggleShowRegister')"
    class="bg-gray-500 bg-opacity-40 fixed top-0 left-0 w-screen h-screen"
  >
    <div class="bg-white mx-auto max-w-md mt-12">
      <form
        @submit.prevent="register"
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
        <label for="name">Fornavn</label>
        <input v-model="name" placeholder="Anne" id="name" type="text" />
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
// import Close from "../assets/svg/close.svg";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  created() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyCyMkmqbGh2K7k6dqOBpF9yAs6Hn7qaak0",
    //   authDomain: "htle-firebase.firebaseapp.com",
    //   projectId: "htle-firebase",
    //   storageBucket: "htle-firebase.appspot.com",
    //   messagingSenderId: "477507975908",
    //   appId: "1:477507975908:web:4dd802f346969585f60af1",
    //   measurementId: "G-5VBC7N3YY7",
    // });
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCrendential) => {
          console.log(userCrendential.user);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>
