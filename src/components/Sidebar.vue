<template>
  <div
    class="bg-htle_sidebar w-12 min-h-screen max-h-screen fixed text-blue-500 flex flex-col items-center justify-center"
  >
    <CodeSvg class="w-8 hover:animate-bounce text-red-600" />
    <Dank />
  </div>
</template>

<script>
import CodeSvg from "../assets/svg/code.svg";
import Dank from "../assets/svg/dank.svg";
export default {
  components: {
    CodeSvg,
    Dank,
  },
};
// import Login from "../views/Login.vue";
// export default {
//   components: {
//     Login,
//   },
// };
</script>

<style>
</style>