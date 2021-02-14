<template>
  <h1 class="text-black">h4tle</h1>
  <button @click="this.$store.dispatch('toggleShowLogin')">Login</button>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 1000 }"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
 
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
</style>