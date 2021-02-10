<!-- =========================================================================================
  Description: Componente principal plataforma de cursos
  Receive: ---
  Author: DanyCristhian
========================================================================================== -->

<template>
  <div>
    <carousel-principal></carousel-principal>
    <br />
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto">
        <div class="vx-row">
          <div class="vx-col w-full sm:w-3/5 md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
            <vs-divider position="left">
              <h4 style="display: inline; color: #626262;">Últimas noticias</h4>
            </vs-divider>
            <ultimas-noticias></ultimas-noticias>
            <br />
            <vs-divider position="left">
              <h4 style="display: inline; color: #626262;">Información de utilidad</h4>
            </vs-divider>
            <vx-card class="mt-6">
              <informacion-util></informacion-util>
            </vx-card>
          </div>

          <div class="vx-col w-full sm:w-2/5 md:w-2/5 lg:w-1/4 rounded-lg">
            <vx-card>
              <redes-sociales></redes-sociales>
              <otros-sitios class="mt-6"></otros-sitios>
            </vx-card>
          </div>
        </div>
        <br />

        <div class="vx-col w-full mt-6">
          <vs-divider position="left">
            <h4 style="display: inline; color: #626262;">Cajón de opiniones</h4>
          </vs-divider>

          <carousel-comments
            :slidesPerView="3"
            :spaceBetween="10"
            :carouselItems="carouselComments"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import jumbotron from "./components/jumbotron/buscador.vue";
import carousel_principal from "@/components/carousel/principal.vue";
import ultimas_noticias from "@/components/carousel/ultimas-noticias.vue";
import informacion_util from "./components/informacion-util/informacion-util.vue";
import redes_sociales from "./components/redes-sociales/redes-sociales.vue";
import otros_sitios from "./components/otros-sitios/otros-sitios.vue";
// import carousel_course from "@/components/carousel/carousel-courses.vue";
import carousel_comments from "@/components/carousel/carousel-comments.vue";

// CAROUSEL
// import "swiper/dist/css/swiper.min.css";
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      carouselComments: [
        {
          name: "José Pérez",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        },
        {
          name: "Javier Mina",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        },
        {
          name: "Sandra Flores",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        },
        {
          name: "María Toscano",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        },
        {
          name: "Karla Martínez",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        },
        {
          name: "Gerardo López Sánchez",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, assumenda. Similique itaque optio ab eum soluta assumenda! Labore, enim, non quasi ex, harum modi numquam sint soluta praesentium distinctio suscipit.",
          date: "25 min ago"
        }
      ]
    };
  },
  // computed: {
  // category_selected: function() {
  //   return this.$store.state.category_selected.categoria_seleccionada;
  // },
  // carouselItemsCourse: function() {
  //   return this.$store.state.courses.cursos;
  // }
  // },
  components: {
    // "jumbotron-search-input": jumbotron,
    "carousel-principal": carousel_principal,
    "ultimas-noticias": ultimas_noticias,
    "informacion-util": informacion_util,
    "redes-sociales": redes_sociales,
    "otros-sitios": otros_sitios,
    // "carousel-courses": carousel_course,
    "carousel-comments": carousel_comments
  }
};
</script>