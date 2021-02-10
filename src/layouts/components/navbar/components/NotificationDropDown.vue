<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon
      icon="BellIcon"
      class="cursor-pointer mt-1 mr-4"
      :badge="getUnreadNotifications.length"
    />
    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown ml-2">
      <div class="notification-top text-center p-5 bg-primary text-white">
        <p
          v-if="getUnreadNotifications.length"
          class="opacity-75"
        >{{ getUnreadNotifications.length }} Notificaci{{ getUnreadNotifications.length > 1 ? 'ones' : 'ón'}} nuevas</p>
        <p v-else class="opacity-75">Notificaciones vistas</p>
      </div>
      <component
        :is="scrollbarTag"
        ref="mainSidebarPs"
        class="scroll-area--nofications-dropdown p-0 mb-10"
        :settings="settings"
        :key="$vs.rtl"
      >
        <ul class="bordered-items">
          <li
            v-for="ntf in notifications"
            :key="ntf.id"
            class="flex justify-between px-4 py-4 notification cursor-pointer"
          >
            <div class="flex items-start">
              <feather-icon
                v-if="ntf.unread"
                icon="DiscIcon"
                svgClasses="text-danger stroke-current mr-1 h-5 w-5 notificacion-parpadea"
              ></feather-icon>
              <div class="mx-2">
                <span
                  class="font-medium block notification-title"
                  :class="[`text-${ntf.category}`]"
                >{{ ntf.nombre }}</span>
                <small class>{{ ntf.msg }}</small>
              </div>
            </div>
            <small class="mt-1 whitespace-no-wrap">Hace {{ ntf.time }}</small>
          </li>
        </ul>
      </component>

      <div
        class="checkout-footer fixed bottom-0 rounded-b-lg text-primary w-full p-2 font-semibold text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
        @click="redirectTo('/notificaciones')"
      >
        <span>Ver todas las notificaciones</span>
      </div>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    getNotifications() {
      return cantidad => this.$store.getters["notifications/getNotifications"](cantidad);
    },
    getUnreadNotifications() {
      return this.$store.getters["notifications/getUnreadNotifications"];
    },
    notifications() {
      return this.getUnreadNotifications.length > 0
        ? this.getUnreadNotifications
        : this.getNotifications(5);
    }
  },
  methods: {
    redirectTo: function(path, params) {
      let redirect = { path: path, params: params }
      this.$children[0]._data.vsDropdownVisible = false
      this.$children[0].$children[0]._data.dropdownVisible = false
      
      this.$router.push(redirect).catch(() => {})
    }
  }
};
</script>
