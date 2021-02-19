<template>
  <!-- Hero Section -->
  <div class="flex flex-col items-center">
    <!-- Yellow Dashboard  -->
    <div class="grid grid-cols-3 w-full">
      <div></div>
      <div class="text-center">
        <div class="font-bold pb-0">Y E L L O W</div>
        <div class="transform rotate-180 font-bold pt-0">D A S H B O A R D</div>
      </div>
      <div class="flex gap-2 justify-end">
        <button @click="this.$store.dispatch('toggleShowRegister')">
          Register
        </button>
        <button @click="this.$store.dispatch('toggleShowLogin')" class="mr-2">
          Login
        </button>
      </div>
    </div>
    <!--Register & Login buttons  -->
    <Logo class="h-96 w-96 text-gray-900" />

    <!-- Welcome text -->
    <div class="text-9xl">
      <p class="mt-8">W E L C O M E</p>
    </div>
  </div>
  <div class="mb-20">
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
    <button
      class="group overflow-hidden text-htle_yellow hover:text-htle_sidebar relative h-12 w-72 bg-htle_sidebar"
    >
      <span
        class="bg-htle_beige text-htle_sidebar absolute group-hover:transform-none transform -translate-x-full duration-700 hover:transform-none top-0 left-0 w-full h-full"
      >
        <span class="transform translate-x-full">
          <a href="" class="font-bold text-htle_yellow hover:text-htle_sidebar"
            >L o g i n
          </a>
        </span>
      </span>
      <span>
        <a href="" class="font-bold text-htle_yellow hover:text-htle_sidebar"
          >L o g i n
        </a>
      </span>
    </button>
  </div>
  <!--  -->
  <div class="bg-htle_beige">
    <div class="flex justify-center">
      <button
        class="group overflow-hidden text-htle_sidebar hover:text-htle_yellow relative h-12 w-72 bg-htle_yellow mr-44"
      >
        <span
          class="bg-htle_sidebar text-htle_sidebar absolute group-hover:transform-none transform translate-x-full duration-700 hover:transform-none top-0 left-0 w-full h-full"
        >
          <span class="transform translate-x-full"> </span>
        </span>
        <span href="" class="font-bold">R e g i s t e r</span>
      </button>
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
</template>
 
<script>
import Logo from "../assets/logo.svg";

import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

export default {
  data: function () {
    return {
      // image: logo,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Logo,
  },
};
</script>

<style>
</style>