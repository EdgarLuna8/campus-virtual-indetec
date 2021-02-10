<template>
  <vs-sidebar
    click-not-close
    :hidden-background="true"
    class="full-vs-sidebar email-view-sidebar items-no-padding"
    v-model="isSidebarActive"
    position-right
  >
    <div
      class="mail-sidebar-content px-0 sm:pb-6 h-full"
      v-if="isSidebarActive"
    >
      <div
        class="flex flex-wrap items-center email-header justify-between md:px-8 px-6 sm:pb-2 sm: pt-6 d-theme-dark-bg"
      >
        <div class="flex mb-4">
          <div class="flex items-center">
            <feather-icon
              icon="ArrowLeftIcon"
              @click="$emit('closeSidebar')"
              class="cursor-pointer mr-4"
              svg-classes="w-6 h-6"
            ></feather-icon>
            <h4>{{ itemSelected.nombre }}</h4>
          </div>
        </div>
      </div>
      <component
        :is="scrollbarTag"
        class="scroll-area-mail-content md:px-8 md:pb-8 pt-4 px-6 pb-6"
        :settings="settings"
        :key="$vs.rtl"
      >
        <div v-if="isSidebarActive">
          <slot name="sidebar-item" :data="data_toShow"></slot>
        </div>
      </component>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    itemSelected: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showThread: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.5,
      },
      //   data_toShow [semestre, cuatrimestre, etc]
      data_toShow: [
        {
          nombre: "Primer cuatrimestre",
          contenido: "21 vídeos (total 234 minutos), 23 lecturas, 2 exámenes",
          materias: [
            {
              id: 1,
              nombre: "Matemáticas",
              descripcion: "Introducción a las matemáticas obscuras",
              avance: 72,
              creditos: 250,
            },
            {
              id: 8,
              nombre: "Física",
              descripcion: "Introducción a la física obscura",
              avance: 100,
              creditos: 250,
            },
          ],
        },
        {
          nombre: "Segundo cuatrimestre",
          contenido: "21 vídeos (total 234 minutos), 23 lecturas, 2 exámenes",
          materias: [
            {
              id: 2,
              nombre: "Química",
              descripcion: "Introducción a la química obscura",
              avance: 38,
              creditos: 200,
            },
            {
              id: 5,
              nombre: "Estadística",
              descripcion: "Introducción a la estadística obscura",
              avance: 38,
              creditos: 200,
            },
          ],
        },
        {
          nombre: "Tercer cuatrimestre",
          contenido: "21 vídeos (total 234 minutos), 23 lecturas, 2 exámenes",
          materias: [
            {
              id: 3,
              nombre: "Matemáticas",
              descripcion: "Introducción a las matemáticas obscuras",
              avance: 0,
              creditos: 200,
            },
          ],
        },
        {
          nombre: "Cuatro cuatrimestre",
          contenido: "21 vídeos (total 234 minutos), 23 lecturas, 2 exámenes",
          materias: [
            {
              id: 4,
              nombre: "Matemáticas",
              descripcion: "Introducción a las matemáticas obscuras",
              avance: 39,
              creditos: 200,
            },
          ],
        },
      ],
    };
  },
  watch: {
    isSidebarActive(value) {
      if (!value) {
        this.$emit("closeSidebar");
        setTimeout(() => {
          this.showThread = false;
        }, 500);
      }
    },
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },
  components: {
    VuePerfectScrollbar,
  },
};
</script>

<style>
.full-vs-sidebar .vs-sidebar {
  max-width: 100% !important;
}
.vs-con-table .vs-con-tbody {
  border: 0;
}
</style>