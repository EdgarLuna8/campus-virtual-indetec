<template>
  <div class="carousel-example">
    <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
      <swiper-slide>
        <vx-card
          title="Acciones preventivas para evitar propagación del coronavirus (COVID-19)"
          title-color="#fff"
          card-background="linear-gradient(to right, #FF9800, #FFC107)"
          content-color="#fff"
        >
          <p
            class="mb-3"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum unde aperiam enim minima impedit, aut id corporis alias, animi blanditiis odio molestias quis? Quibusdam officiis exercitationem beatae quas reiciendis voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus optio ratione nostrum, impedit rem molestias sequi dicta delectus. Cumque id earum harum mollitia consequuntur odio enim neque eveniet nobis!</p>
        </vx-card>
      </swiper-slide>
      <swiper-slide>
        <vx-card
          title="Acciones preventivas para evitar propagación del coronavirus (COVID-19)"
          title-color="#fff"
          card-background="linear-gradient(to right, #FF9800, #FFC107)"
          content-color="#fff"
        >
          <p
            class="mb-3"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum unde aperiam enim minima impedit, aut id corporis alias, animi blanditiis odio molestias quis? Quibusdam officiis exercitationem beatae quas reiciendis voluptatem.</p>
        </vx-card>
      </swiper-slide>
      <swiper-slide>
        <vx-card
          title="Acciones preventivas para evitar propagación del coronavirus (COVID-19)"
          title-color="#fff"
          card-background="linear-gradient(to right, #FF9800, #FFC107)"
          content-color="#fff"
        >
          <p
            class="mb-3"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, recusandae molestias. Esse, maiores iure ratione beatae quibusdam assumenda earum ad porro? Dolorem asperiores corrupti, dolor expedita consectetur quidem ullam ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis provident nulla hic error sint cum eveniet fuga dolorem recusandae modi atque excepturi voluptatum, dolores a nobis quis aperiam corrupti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum sed aspernatur maxime, rem omnis reiciendis rerum cumque debitis est blanditiis eaque, nihil hic quis odio illo, sit velit qui nobis.  </p>
        </vx-card>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
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
        effect: 'cube',
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'progressbar'
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>