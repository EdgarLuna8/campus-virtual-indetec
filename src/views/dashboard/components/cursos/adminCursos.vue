<template>
  <div>
    <div class="algolia-header mb-4">
      <div class="flex md:items-end items-center justify-between flex-wrap">
        <div class="flex justify-between items-end flex-grow">
          <p class="font-semibold md:block hidden">
            Mostrando
            <b>{{ getCourseList(inputBusqueda).length }}</b> curso(s).
          </p>

          <!-- ITEM VIEW - GRID/LIST -->
          <div class="flex flex-wrap">
            <div style="display: inline-flex;">
              <router-link
                to="/edicion-evento/"
                tag="div"
                class="hover:text-white hover:bg-primary shadow-drop hadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center"
              >
                <feather-icon icon="PlusIcon" class="m-2" />
                <span class="mr-2">Crear nuevo curso</span>
              </router-link>
              <!-- <div class="hover:text-white hover:bg-primary shadow-drop hadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center">
                <feather-icon
                icon="PlusIcon"
                class="m-2"
              />
                <span class="mr-2">Crear nuevo curso</span>
              </div>-->

              <feather-icon
                icon="GridIcon"
                @click="viewItemGrid = true"
                class="p-2 ml-4 mr-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer"
                :svgClasses="{'text-primary stroke-current': viewItemGrid}"
              />
              <feather-icon
                icon="ListIcon"
                @click="viewItemGrid = false"
                class="p-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer"
                :svgClasses="{'text-primary stroke-current': !viewItemGrid}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="algolia-content-container" class="relative clearfix">
      <!-- RIGHT COL -->
      <div>
        <!-- SEARCH BAR -->
        <div class="relative mb-8">
          <!-- SEARCH INPUT -->
          <vs-input
            class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg"
            placeholder="Busca algún curso"
            v-model="inputBusqueda"
            size="large"
          />

          <!-- SEARCH ICON -->
          <div
            slot="submit-icon"
            class="absolute top-0 right-0 py-4 px-6"
            v-show="inputBusqueda == ''"
          >
            <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
          </div>

          <!-- CLEAR INPUT ICON -->
          <div
            slot="reset-icon"
            class="absolute top-0 right-0 py-4 px-6"
            v-show="inputBusqueda != ''"
          >
            <feather-icon
              icon="XIcon"
              svgClasses="h-6 w-6 cursor-pointer"
              @click="inputBusqueda = ''"
            />
          </div>
        </div>

        <!-- SEARCH RESULT -->
        <!-- GRID VIEW -->
        <template v-if="viewItemGrid">
          <div class="items-grid-view vx-row match-height">
            <div
              class="vx-col lg:w-1/4 sm:w-1/3 w-full"
              v-for="item in getCourseList(inputBusqueda)"
              :key="item.id"
            >
              <item-grid-view :item="item">
                <!-- SLOT: PRICE SECTION-->
                <template slot="price-section">
                  <div class="flex">
                    <feather-icon
                      icon="CalendarIcon"
                      svgClasses="h-4 w-4"
                      class="text-primary mr-2"
                    />
                    <p class="item-description truncate text-sm">{{ item.date }}</p>
                  </div>
                </template>

                <!-- SLOT: BUTTONS SECTION-->
                <template slot="action-buttons">
                  <!-- <router-link :to="'/edicion-evento/' + item.id"> -->
                  <router-link
                    tag="div"
                    :to="'/edicion-evento/' + item.id"
                    class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                  >
                    <!-- <div
                    class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
                    >-->
                    <feather-icon icon="SettingsIcon" svgClasses="h-4 w-4" />
                    <span class="text-sm font-semibold ml-2">Editar</span>
                    <!-- </div> -->
                  </router-link>
                </template>
              </item-grid-view>
            </div>
          </div>
        </template>

        <!-- LIST VIEW -->
        <template v-else>
          <div
            class="items-list-view mb-base"
            v-for="item in getCourseList(inputBusqueda)"
            :key="item.id"
          >
            <item-list-view :item="item">
              <!-- SLOT: PRICE SECTION-->
              <template slot="price-section">
                <div class="my-6">
                  <h5 class="font-bold text-center">${{ item.price }}</h5>
                  <span class="text-grey flex items-start justify-center mt-1">
                    <span class="text-sm ml-2">{{ item.date }}</span>
                  </span>
                </div>
              </template>

              <!-- SLOT: ACTION BUTTONS -->
              <template slot="action-buttons">
                <router-link
                  tag="div"
                  :to="'/edicion-evento/' + item.id"
                  class="bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer"
                >
                  <!-- <div
                  class="bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer"
                  >-->
                  <feather-icon icon="SettingsIcon" svgClasses="h-4 w-4" />
                  <span class="text-sm font-semibold ml-2">Editar</span>
                </router-link>
              </template>
            </item-list-view>
          </div>
        </template>

        <div v-if="getCourseList(inputBusqueda).length == 0" class="w-full text-center">
          <p class="mt-10">No hay cursos relacionados a esta búsqueda.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ItemGridView: () =>
      import("@/views/components/vista-curso/ItemGridView.vue"),
    ItemListView: () =>
      import("@/views/components/vista-curso/ItemListView.vue"),
  },
  data() {
    return {
      inputBusqueda: "",
      viewItemGrid: true,
    };
  },
  computed: {
    getCourseList: function () {
      return (search) => this.$store.getters["courses/getCourseList"](search);
    },
  },
  created() {
    console.log("Created Cursos");
  },
  destroyed() {
    console.log("Cursos was destroyed");
  },
};
</script>


<style lang="scss">
#algolia-instant-search-demo {
  .algolia-header {
    .algolia-filters-label {
      width: calc(260px + 2.4rem);
    }
  }

  #algolia-content-container {
    .vs-sidebar {
      position: relative;
      float: left;
    }
  }

  .algolia-search-input-right-aligned-icon {
    padding: 1rem 1.5rem;
  }

  .algolia-price-slider {
    min-width: unset;
  }

  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
    min-width: 50%;
  }

  .item-view-secondary-action-btn {
    min-width: 50%;
  }
}

.theme-dark {
  #algolia-instant-search-demo {
    #algolia-content-container {
      .vs-sidebar {
        background-color: #10163a;
      }
    }
  }
}

@media (min-width: 992px) {
  .vs-sidebar-rounded {
    .vs-sidebar {
      border-radius: 0.5rem;
    }

    .vs-sidebar--items {
      border-radius: 0.5rem;
    }
  }
}

@media (max-width: 992px) {
  #algolia-content-container {
    .vs-sidebar {
      position: absolute !important;
      float: none !important;
    }
  }
}
</style>

