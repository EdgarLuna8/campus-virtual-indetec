<template>
  <div class="carousel-example">
    <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
      <swiper-slide>
        <img
          class="responsive"
          src="https://www.indetec.gob.mx/delivery?srv=0&sl=0&path=/banner_indetec/Banner-tarifas-progresivas.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="https://www.indetec.gob.mx/delivery?srv=0&sl=0&path=/banner_indetec/banner-admin-integral-covid.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="https://www.indetec.gob.mx/delivery?srv=0&sl=0&path=/banner_indetec/carrusel-tenencia.jpg"
          alt="banner"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="responsive"
          src="https://www.indetec.gob.mx/assets/img/banner_index/banner1.jpg"
          alt="banner"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'progressbar'
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>