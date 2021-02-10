<template>
  <div
    class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden"
  >
    <div
      class="no-scroll-content border border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0"
    >
      <!-- SEARCH BAR -->
      <div class="flex border d-theme-dark-bg items-center">
        <vs-input
          icon-no-border
          icon="icon-search"
          size="large"
          icon-pack="feather"
          :placeholder="textSearch"
          v-model="searchItem"
          class="vs-input-no-border vs-input-no-shdow-focus w-full"
        />
      </div>
      

      <!-- COURSE LIST -->
      <component
        :is="scrollbarTag"
        class="email-content-scroll-area"
        :settings="settings"
        ref="mailListPS"
        :key="$vs.rtl"
        v-if="getDataFiltered(searchItem).length"
      >
        <transition-group name="list-enter-up" tag="ul" appear>
          <li
            class="cursor-pointer item-listado"
            v-for="item in getDataFiltered(searchItem)"
            :key="item.id"
            @click="selectItem(item)"
          >
            <slot name="item-list" :item="item"></slot>
            <vs-divider class="m-0"/>
            <!-- <cruso-item :item="item" /> -->
          </li>
        </transition-group>
      </component>

      <!-- ELSE IF SEARCH HAS NO RESULTS -->
      <div v-else-if="searchItem != ''" class="text-center">
        <p class="mt-10">No hay resultados relacionados a esta búsqueda.</p>
      </div>

      <!-- IF NO CURSES -->
      <div v-else class="text-center">
        <p class="mt-10">
          No te has registrado a ningún curso, revisa la
          <b class="text-primary">oferta académica</b>.
        </p>
      </div>
    </div>

    <!-- VIEW SIDEBAR -->
    <sidebar
      :isSidebarActive="isSidebarActive"
      @closeSidebar="closeViewSidebar"
      :itemSelected="itemSelected"
    >
      <template #sidebar-item="{ data }">
        <vx-card>
          <vs-collapse accordion>
            <vs-collapse-item
              style="border: 1px solid rgba(0, 0, 0, 0.04); border-radius: 5px"
              v-for="(mod, index) in data"
              :key="index"
            >
              <!-- COLAPSABLE -->
              <div
                slot="header"
                class="text-left leading-tight hidden sm:block"
              >
                <p class="font-semibold text-primary">{{ mod.nombre }}</p>
                <small style="font-size: small">{{ mod.contenido }}</small>
              </div>

              <!-- CONTENIDO -->
              <div
                class="vx-row"
                style="cursor: default"
                v-for="(mat, index) in mod.materias"
                :key="index"
              >
                <!-- NOMBRE Y DESCRIPCIÓN DE MATERIA -->
                <div
                  class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-left mb-4 hidden sm:block"
                >
                  <p class="font-semibold">{{ mat.nombre }}</p>
                  <small style="font-size: small">{{ mat.descripcion }}</small>
                </div>

                <!-- AVANCE -->
                <div
                  class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4"
                >
                  <p class="font-semibold">Avance</p>
                  <vs-progress
                    :percent="mat.avance"
                    :color="mat.avance == 100 ? 'success' : 'warning'"
                  ></vs-progress>
                </div>

                <!-- ESTADO -->
                <div
                  class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4"
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
                        :color="mat.avance == 100 ? 'success' : 'warning'"
                        >{{
                          mat.avance == 100 ? "Terminado" : "En proceso"
                        }}</vs-chip
                      >
                    </vs-col>
                  </vs-row>
                </div>

                <!-- CRÉDITOS -->
                <div
                  class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4"
                >
                  <p class="font-semibold">Créditos</p>
                  <small
                    class="text-success font-semibold"
                    style="font-size: small"
                    >{{ mat.creditos }}</small
                  >
                </div>

                <!-- ACCIÓN -->
                <div
                  class="vx-col w-full sm:w-1/1 md:w-1/5 lg:w-1/5 text-center mb-4"
                >
                  <p class="font-semibold">Acción</p>
                  <vs-row>
                    <vs-col
                      vs-type="flex"
                      vs-justify="center"
                      vs-align="center"
                      vs-w="12"
                    >
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
      </template>
    </sidebar>
  </div>
</template>


<script>
import CursoItem from "./curso-item.vue";
import sidebar from "./sidebar.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  props: {
    textSearch: {
      type: String,
      default: "Ingresa una búsqueda",
    },
    data: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      searchItem: "",
      itemSelected: {},
      isSidebarActive: false,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3,
      },
      data_toList: [],
    };
  },
  created: function () {
    this.data_toList = this.data;
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    getDataFiltered: function () {
      return (nombre_item) =>
        this.data_toList.filter((item) =>
          item.nombre.toLowerCase().match(nombre_item, "gi")
        );
    },
  },
  methods: {
    selectItem(selected) {
      this.itemSelected = selected;
      this.isSidebarActive = true;
    },
    closeViewSidebar() {
      this.isSidebarActive = false;
    },
  },
  components: {
    "cruso-item": CursoItem,
    sidebar,
    VuePerfectScrollbar,
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/apps/email.scss";

.item-listado {
  transition: 0.5s;
  background-color: white !important;
}
.item-listado:hover {
  transition: 0.5s;
  background-color: antiquewhite !important;
}
</style>
