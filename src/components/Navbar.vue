<template>
  
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