<template>
  <nav class="bg-yellow-300 px-8 pt-2 shadow-md">
     <div class="-mb-px flex justify-center">
         <a class="no-underline text-grey-dark text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/">
             Home
         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/Users">
             Users
         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="/Login">
             Login
         </a>
         <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3" href="/Register">
             Register
         </a>
     </div>
</nav>
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