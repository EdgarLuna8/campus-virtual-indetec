<!-- =========================================================================================
  Description: Componente principal de notificaciones
  Receive: ---
  Author: DanyCristhian
========================================================================================== -->

<template>
  <div>
    <div class="w-full">
      <vx-card>
        <div class="flex mb-4">
          <div class="sm:w-full lg:w-1/5 bg-grid-color-secondary">
            <div class="email__email-sidebar h-full">
              <h3 class="text-primary mb-5 px-4">Notificaciones</h3>

              <component
                :is="scrollbarTag"
                class="email-filter-scroll-area"
                :settings="settings"
                :key="$vs.rtl"
              >
                <div class="px-6 pb-2 flex flex-col">
                  <!-- SIN LEER -->
                  <a
                    @click="notifyFilter = 'unread'"
                    tag="span"
                    class="flex justify-between items-center cursor-pointer"
                    :class="{ 'text-primary': notifyFilter == 'unread' }"
                  >
                    <div class="flex items-center">
                      <feather-icon
                        icon="MailIcon"
                        :svgClasses="[
                          {
                            'text-primary stroke-current':
                              notifyFilter == 'unread',
                          },
                          'h-6 w-6',
                        ]"
                      ></feather-icon>
                      <span class="text-lg ml-3">Sin leer</span>
                    </div>
                    <template v-if="getUnreadNotifications.length">
                      <vs-chip
                        class="number notificacion-parpadea"
                        color="primary"
                        v-if="getUnreadNotifications.length > 0"
                        >{{ getUnreadNotifications.length }}</vs-chip
                      >
                    </template>
                  </a>

                  <!-- LEÍDAS -->
                  <a
                    @click="notifyFilter = 'read'"
                    tag="span"
                    class="flex items-center mt-4 cursor-pointer"
                    :class="{ 'text-primary': notifyFilter == 'read' }"
                  >
                    <feather-icon
                      icon="CheckCircleIcon"
                      :svgClasses="[
                        {
                          'text-primary stroke-current': notifyFilter == 'read',
                        },
                        'h-6 w-6',
                      ]"
                    ></feather-icon>
                    <span class="text-lg ml-3">Leídas</span>
                  </a>
                </div>
              </component>
            </div>
          </div>
          <div class="sm:w-full lg:w-4/5 bg-grid-color">
            <listado :data="getUnreadNotifications">
              <template #item-list="{ item }">

                <div class="chat__contact flex items-center px-2 pt-4 pb-2">
                  <div class="contact__avatar mr-1">
                    <vs-avatar
                      color="primary"
                      icon-pack="feather"
                      icon="icon-bell"
                    />
                  </div>
                  <div
                    class="contact__container w-full flex items-center justify-between overflow-hidden"
                  >
                    <div class="contact__info flex flex-col truncate w-5/6">
                      <h5 class="font-semibold">{{ item.nombre }}</h5>
                      <span class="truncate">{{ item.msg }}</span>
                    </div>

                    <div
                      class="chat__contact__meta flex self-start flex-col items-end w-1/6"
                    >
                      <span class="whitespace-no-wrap">{{ item.time }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </listado>

          </div>
        </div>
      </vx-card>
    </div>

    <div
      class="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto pb-6"
    >
      <vx-card
        v-if="getUnreadNotifications.length"
        title="Notificaciones sin leer"
        class="mb-3"
      >
        <ul
          class="vx-timeline"
          v-for="(item, index) in getUnreadNotifications"
          :key="index"
        >
          <li class="mb-0 pb-6 item-notificacion">
            <div class="timeline-icon bg-white">
              <!-- <feather-icon icon="PlusIcon" svgClasses="text-white stroke-current w-5 h-5" /> -->
              <feather-icon
                icon="DiscIcon"
                svgClasses="text-danger stroke-current h-5 w-5 notificacion-parpadea"
              />
            </div>
            <div class="timeline-info">
              <p class="font-semibold">{{ item.title }}</p>
              <span class="activity-desc">{{ item.msg }}</span>
            </div>
            <small class="text-grey activity-e-time">{{ item.time }}</small>
          </li>
        </ul>
      </vx-card>

      <vx-card title="Todas las notificaciones">
        <ul
          class="vx-timeline"
          v-for="(item, index) in getNotifications(10)"
          :key="index"
        >
          <li class="mb-0 pb-6 item-notificacion">
            <div class="timeline-icon bg-success">
              <feather-icon
                icon="BellIcon"
                svgClasses="text-white stroke-current w-5 h-5"
              />
            </div>
            <div class="timeline-info">
              <p class="font-semibold">{{ item.title }}</p>
              <span class="activity-desc">{{ item.msg }}</span>
            </div>
            <small class="text-grey activity-e-time">{{ item.time }}</small>
          </li>
        </ul>

        <div class="w-full mt-6 text-center">
          <vs-button type="line">Ver más</vs-button>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Listado from "@/components/list/listado.vue";

export default {
  data() {
    return {
      notifyFilter: "unread",
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3,
      },
    };
  },
  computed: {
    getNotifications() {
      return (cantidad) =>
        this.$store.getters["notifications/getNotifications"](cantidad);
    },
    getUnreadNotifications() {
      return this.$store.getters["notifications/getUnreadNotifications"];
    },
    notifications() {
      return this.getUnreadNotifications.length > 0
        ? this.getUnreadNotifications
        : this.getNotifications(5);
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },
  components: {
    VuePerfectScrollbar,
    listado: Listado,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/vxTimeline.scss";
</style>