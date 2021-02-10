<template>
  <div>
    <vs-divider position="left">
      <h2 style="display: inline; color: #626262">Mis cursos</h2>
    </vs-divider>

    <listado textSearch="Busca tu curso" :data="getCourseList">
      <template #item-list="{ item }">
        <div class="sm:px-4 px-2 py-6">
          <div class="flex w-full">
            <div class="flex w-full justify-between items-start">
              <div class="mail__details">
                <h5 class="mb-1 font-semibold">{{ item.nombre }}</h5>
              </div>
            </div>
          </div>

          <div class="vx-row">
            <div
              class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4"
            >
              <p class="font-semibold">Avance {{ item.avance }}%</p>
              <vs-progress
                :percent="item.avance"
                :color="item.avance == 100 ? 'success' : 'warning'"
              ></vs-progress>
            </div>
            <div
              class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4"
            >
              <p class="font-semibold">Estado</p>
              <vs-row>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-chip
                    :color="item.avance == 100 ? 'success' : 'warning'"
                    >{{
                      item.avance == 100 ? "Terminado" : "En proceso"
                    }}</vs-chip
                  >
                </vs-col>
              </vs-row>
            </div>
            <div
              class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4"
            >
              <p class="font-semibold">Materiales</p>
              <vs-row>
                <vs-col
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12"
                >
                  <vs-button
                    color="primary"
                    type="line"
                    icon-pack="feather"
                    icon="icon-edit"
                  ></vs-button>
                </vs-col>
              </vs-row>
            </div>
            <div
              class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4"
            >
              <p class="font-semibold">Fecha</p>
              <p>{{ item.fecha }}</p>
            </div>
          </div>
        </div>
      </template>
    </listado>
  </div>
</template>

<script>
import CursoItem from "./curso-item.vue";
import ContenidoCurso from "./contenido-curso.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Listado from "@/components/list/listado.vue";

export default {
  data() {
    return {
      searchCourse: "",
      cursoSelected: {},
      isSidebarActive: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3,
      },
    };
  },
  computed: {
    // searchCourse: {
    //   get() {
    //     return this.$store.state.email.mailsearchCourse;
    //   },
    //   set(val) {
    //     this.$store.dispatch("email/setEmailsearchCourse", val);
    //   }
    // },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    getCourseList: function () {
      return this.$store.state.courses.mis_cursos;
      // return search => this.$store.getters["courses/get_myCourseList"](search);
    },
  },
  methods: {
    seleccionarCurso(selected) {
      this.cursoSelected = selected;
      this.isSidebarActive = true;
    },
    closeViewSidebar() {
      this.isSidebarActive = false;
    },
  },
  components: {
    "cruso-item": CursoItem,
    "contenido-curso": ContenidoCurso,
    VuePerfectScrollbar,
    listado: Listado,
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/apps/email.scss";
</style>
