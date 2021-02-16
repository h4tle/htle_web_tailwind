<template>
  <!-- Hero Section -->
  <div class="flex flex-col">
    <!-- Yellow Dashboard  -->
    <div class="flex justify-center font-bold pb-0">Yellow</div>
    <div class="flex justify-center transform rotate-180 font-bold pt-0">
      Dashboard
    </div>
    <!--Register & Login buttons  -->
    <div class="flex justify-end">
      <button @click="this.$store.dispatch('toggleShowRegister')" class="mr-2">
        Register
      </button>
      <button @click="this.$store.dispatch('toggleShowLogin')" class="mr-2">
        Login
      </button>
    </div>
    <!-- Welcome text -->
    <div class="flex justify-center text-9xl">
      <p class="mt-8">W E L C O M E</p>
    </div>
  </div>
  <div class="mb-48">
    <!-- Slider x2 -->
    <swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{ delay: 5000 }"
    >
      <swiper-slide class="flex justify-center"
        >This is a place where we ..</swiper-slide
      >
      <swiper-slide class="flex justify-center"
        >.. like to test things :)</swiper-slide
      >
      ...
    </swiper>
  </div>
  <div class="flex justify-center">
    <div class="flex justify-center h-12 w-72 bg-htle_beige">Login</div>
  </div>
  <!--  -->
  <div class="bg-htle_beige">
    <div>
      <div class="flex justify-center">
        <div class="flex justify-center h-12 w-72 bg-htle_yellow mr-44">
          Register
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
 
<script>
import logo from "../assets/svg/logo.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

export default {
  data: function () {
    return {
      image: logo,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
</style>