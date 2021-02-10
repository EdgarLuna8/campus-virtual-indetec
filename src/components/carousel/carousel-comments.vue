<!-- =========================================================================================
  Description: Carousel para comentarios de estudiantes
  Receive: 
    slidesPerView: { type: Number, default: 4 },
    spaceBetween:  { type: Number, default: 50 },
    carouselItems: { type: Array,  default: function() { return []; } }
  Author: DanyCristhian
========================================================================================== -->

<template>
  <div>
    <div v-if="lista">
      <div class="vx-col w-full mb-base">
        <div class="pt-5">
          <ul class="vx-timeline" v-for="(item, index) in carouselData" :key="index">
            <li>
              <div class="timeline-icon bg-success">
                <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5" />
              </div>
              <div class="timeline-info">
                <p class="font-semibold">{{ item.name }}</p>
                <span class="activity-desc">{{ item.description }}</span>
              </div>
              <small class="text-grey activity-e-time">{{ item.date }}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="carousel-example">
      <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
        <swiper-slide v-for="(item, index) in carouselData" :key="index">
          <div class="vx-col w-full mb-base">
            <vx-card>
              <ul class="vx-timeline">
                <li>
                  <div class="timeline-icon bg-success">
                    <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5" />
                  </div>
                  <div class="timeline-info">
                    <p class="font-semibold">{{ item.name }}</p>
                    <span class="activity-desc">{{ item.description }}</span>
                  </div>
                  <small class="text-grey activity-e-time">{{ item.date }}</small>
                </li>
              </ul>
            </vx-card>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination" style="bottom: 0;"></div>
        <div class="swiper-button-next swiper-button-white mr-3" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white ml-3" slot="button-prev"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  props: {
    slidesPerView: { type: Number, default: 4 },
    spaceBetween: { type: Number, default: 50 },
    carouselItems: {
      type: Array,
      default: function() {
        return [];
      }
    },
    lista: { type: Boolean, default: false }
  },
  data() {
    return {
      carouselData: this.carouselItems,
      swiperOption: {
        slidesPerView: this.slidesPerView,
        spaceBetween: this.spaceBetween,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
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

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxTimeline.scss";
</style>