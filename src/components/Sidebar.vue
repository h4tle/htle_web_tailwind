<template>
  <div
    class="bg-htle_sidebar w-12 min-h-screen max-h-screen fixed text-htle_yellow gap-8 flex flex-col items-center justify-center"
  >
    <Home class="w-10" />

    <Upload class="w-10" />
    <Todo class="w-10" />
    <Setting class="w-10" />
    <Dank class="w-12 h-12 flex" />
  </div>
</template>

<script>
import Dank from "../assets/svg/dank.svg";
import Upload from "../assets/svg/upload.svg";
import Todo from "../assets/svg/todo.svg";
import Setting from "../assets/svg/setting.svg";
import Home from "../assets/svg/home.svg";

export default {
  components: {
    Home,
    Dank,
    Upload,
    Todo,
    Setting,
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