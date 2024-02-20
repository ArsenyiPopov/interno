<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-image" src="../assets/img/project_1.png" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-image" src="../assets/img/project_2.png" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img class="swiper-image" src="../assets/img/project_3.png" />
      </div>
    </swiper-slide>
  </swiper>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 800px;
  margin-bottom: 200px;
  border-radius: 100px;
}

.swiper-slide {
  
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: var(--swiper-pagination-bottom, 0);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
}
.swiper-pagination-bullet-active {
    background: wheat !important;
}
.swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 18px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 18px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: #fff;
    border: solid 1px black;
    opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover !important;
}
</style>
