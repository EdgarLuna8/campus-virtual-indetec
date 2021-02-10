<template>
  <div>
    <vs-sidebar
      click-not-close
      parent="#email-app"
      :hidden-background="true"
      class="full-vs-sidebar email-view-sidebar items-no-padding"
      v-model="isSidebarActive"
      position-right
    >
      <div class="mail-sidebar-content px-0 sm:pb-6 h-full" v-if="isSidebarActive">
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
              <h4>{{ cursoSelected.nombre }}</h4>
            </div>
          </div>
        </div>

        <component
          :is="scrollbarTag"
          class="scroll-area-mail-content md:px-8 md:pb-8 pt-4 px-6 pb-6"
          :settings="settings"
          :key="$vs.rtl"
        >
          <br />

          <div v-if="isSidebarActive">
            <vx-card>
              <vs-collapse accordion>
                <vs-collapse-item style="border: 1px solid rgba(0, 0, 0, 0.04); border-radius: 5px;" v-for="mod in modalidad" :key="mod.id">
                  <!-- COLAPSABLE -->
                  <div slot="header" class="text-left leading-tight hidden sm:block">
                    <p class="font-semibold text-primary">{{ mod.nombre }}</p>
                    <small style="font-size: small">{{ mod.contenido }}</small>
                  </div>

                  <!-- CONTENIDO -->
                  <div class="vx-row" style="cursor: default" v-for="mat in mod.materias" :key="mat.id">
                    <!-- NOMBRE Y DESCRIPCIÓN DE MATERIA -->
                    <div class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-left mb-4 hidden sm:block">
                      <p class="font-semibold">{{ mat.nombre }}</p>
                      <small style="font-size: small">{{ mat.descripcion }}</small>
                    </div>

                    <!-- AVANCE -->
                    <div class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4">
                      <p class="font-semibold">Avance</p>
                      <vs-progress
                        :percent="mat.avance"
                        :color="(mat.avance == 100) ? 'success' : 'warning'"
                      ></vs-progress>
                    </div>

                    <!-- ESTADO -->
                    <div class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4">
                      <p class="font-semibold">Estado</p>
                      <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                          <vs-chip :color="(mat.avance == 100) ? 'success' : 'warning'">{{ (mat.avance == 100) ? 'Terminado' : 'En proceso' }}</vs-chip>
                        </vs-col>
                      </vs-row>
                    </div>

                    <!-- CRÉDITOS -->
                    <div class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4">
                      <p class="font-semibold">Créditos</p>
                      <small
                        class="text-success font-semibold"
                        style="font-size: small"
                      >{{ mat.creditos }}</small>
                    </div>

                    <!-- ACCIÓN -->
                    <div class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4">
                      <p class="font-semibold">Acción</p>
                      <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                          <vs-chip color="warning">
                            <vs-avatar icon-pack="feather" icon="icon-play" />
                            <span>Ir a lección</span>
                          </vs-chip>
                        </vs-col>
                      </vs-row>
                    </div>
                  </div>
                </vs-collapse-item>
              </vs-collapse>
            </vx-card>

            <!-- <div class="vx-row" style="margin-top: 2.2rem">
              <div class="vx-col w-full">
                <vx-card>
                  <div class="vx-row">
                    <div class="vx-col w-full flex justify-between">
                      <span class="text-lg">
                        Click here to
                        <span class="text-primary font-semibold cursor-pointer">Reply</span> or
                        <span class="text-primary font-semibold cursor-pointer">Forward</span>
                      </span>
                      <feather-icon icon="PaperclipIcon"></feather-icon>
                    </div>
                  </div>
                </vx-card>
              </div>
            </div> -->
          </div>
        </component>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    cursoSelected: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showThread: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.5
      },
      //   modalidad [semestre, cuatrimestre, etc]
      modalidad: [
        {
          nombre: "Primer cuatrimestre",
          contenido: "21 vídeos (total 234 minutos), 23 lecturas, 2 exámenes",
          materias: [
            {
              id: 1,
              nombre: "Matemáticas",
              descripcion: "Introducción a las matemáticas obscuras",
              avance: 72,
              creditos: 250
            },
            {
              id: 8,
              nombre: "Física",
              descripcion: "Introducción a la física obscura",
              avance: 100,
              creditos: 250
            }
          ]
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
              creditos: 200
            },
            {
              id: 5,
              nombre: "Estadística",
              descripcion: "Introducción a la estadística obscura",
              avance: 38,
              creditos: 200
            }
          ]
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
              creditos: 200
            }
          ]
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
              creditos: 200
            }
          ]
        }
      ]
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
    }
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    }
  },
  components: {
    VuePerfectScrollbar
  }
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