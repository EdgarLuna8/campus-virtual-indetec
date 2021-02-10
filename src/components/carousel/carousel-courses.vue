<!-- ======================================================================================
  Description: Carousel para cursos 
  Receive: 
    slidesPerView: { type: Number, default: 4 },
    spaceBetween:  { type: Number, default: 50 },
    carouselItems: { type: Array,  default: function() { return []; } }
  Author: DanyCristhian
========================================================================================== -->

<template>
  <div class="carousel-example">
    <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
      <swiper-slide v-for="(item, index) in carouselData" :key="index">
        <div class="vx-card grid-view-item mb-base overflow-hidden">
          <div slot="no-body">
            <router-link to="/detalles-curso/1">
              <img :src="item.image" alt="content-img" class="responsive cursor-pointer" />
            </router-link>
          </div>

          <div class="p-3">
            <vx-tooltip :text="item.name" position="left">
              <router-link to="/detalles-curso/1">
                <h6 class="mb-2 truncate font-bold cursor-pointer">{{ item.name }}</h6>
              </router-link>
            </vx-tooltip>
            <vx-tooltip :text="item.by" position="left">
              <p class="text-sm mb-2 truncate">
                <span class="font-semibold cursor-pointer">{{ item.by }}</span>
              </p>
            </vx-tooltip>
            <vx-tooltip :text="item.description" position="left">
              <p class="item-description truncate text-sm">{{ item.description }}</p>
            </vx-tooltip>

            <vs-divider class="mr-2"></vs-divider>
            <div class="flex justify-between flex-wrap mb-1 text-center">
              <span class="flex">
                <feather-icon icon="CalendarIcon" svgClasses="text-success stroke-current h-4 w-4" />
                <span class="text-sm ml-1">{{ item.date }}</span>
              </span>
            </div>
            <div class="flex justify-between flex-wrap">
              <span class="flex">
                <feather-icon icon="StarIcon" svgClasses="text-warning stroke-current h-4 w-4" />
                <h6 class="ml-1">{{ item.price }}</h6>
              </span>
              <span class="flex">
                <feather-icon
                  icon="DollarSignIcon"
                  svgClasses="text-success stroke-current h-4 w-4"
                />
                <h6 class="ml-1 font-bold">{{ item.price }}</h6>
              </span>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
              @click="addwishList(item)"
            >
              <feather-icon
                icon="HeartIcon"
                :svgClasses="[{'text-danger fill-current' : isInWishList(item.id) }, 'h-5 w-5']"
              />
            </div>
            <div
              class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
              @click="additemInCart(item)"
            >
              <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" class="ml-1" />
              <span class="text-sm font-semibold ml-2" v-if="isInCart(item.id)">Ver carrito</span>
              <span class="text-sm font-semibold ml-2" v-else>Añadir</span>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination" style="bottom: 0;"></div>
      <div class="swiper-button-next swiper-button-white mr-3" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white ml-3" slot="button-prev"></div>
    </swiper>
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
    }
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
  computed: {
    isInWishList: function() {
      return itemId => this.$store.getters["eCommerce/isInWishList"](itemId);
    },
    isInCart: function() {
      return itemId => this.$store.getters["eCommerce/isInCart"](itemId);
    }
  },
  methods: {
    addwishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    additemInCart(item) {
      this.isInCart(item.id)
        ? this.$router.push("/carrito-compras").catch(() => {})
        : this.$store.dispatch("eCommerce/additemInCart", item);
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss">
.grid-view-item {
  .grid-view-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    transition: 0.35s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);

    .grid-view-img {
      opacity: 0.9;
    }
  }
}
</style>
