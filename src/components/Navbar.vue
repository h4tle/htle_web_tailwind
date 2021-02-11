<template>
  <h1>Hej</h1>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return sessionStorage.getItem("Token");
    },
  },
};
</script>

<style>

</style>