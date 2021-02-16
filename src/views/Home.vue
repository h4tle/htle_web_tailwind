<template>
  <div class="flex htle_yellow py-12 justify-center">
    <div class="p-8 text-center max-w-2xl">
      <div class="md:text-3xl text-3xl font-bold">h4tle</div>
      <div class="text-xl font-normal mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <logo class="w-8 self-center" />
  </div>
  <div>
    <button
      @click="this.$store.dispatch('toggleShowLogin')"
      class="flex flex-col"
    >
      Login
    </button>
  </div>
  <br />
  <button @click="this.$store.dispatch('toggleShowRegister')">Register</button>

  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 5000 }"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
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