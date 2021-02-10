
<template>
  <ul class="menu-items flex flex-wrap items-center" v-if="showIt">
    <li
      class="menu-item"
      v-for="(item, index) in menuItems"
      :key="index"
      :class="{ 'mr-2': !(menuItems.length === index + 1) }"
    >
      <!-- If header -->
      <template v-if="item.header">
        <h-nav-menu-header :header="item" class="menu-header relative" />
      </template>

      <!-- If it's group -->
      <template v-else-if="item.submenu">
        <h-nav-menu-group
          class="menu-group relative py-4"
          bottom
          :key="`group-${index}`"
          :group="item"
          :groupIndex="index"
          :open="checkGrpChildrenActive(item)"
        />
      </template>

      <!-- If it's link -->
      <div v-else-if="item.url" class="menu-link">
        <h-nav-menu-item
          class="relative py-4 cursor-pointer"
          :to="item.slug !== 'external' ? item.url : null"
          :href="item.slug === 'external' ? item.url : null"
          :icon="item.icon"
          :target="item.target"
          :isDisabled="item.isDisabled"
          :slug="item.slug"
          :modal="item.modal"
          @activeContactoModal="activeContacto = true"
        >
          <span class="truncate">{{ item.name }}</span>
          <vs-chip :color="item.tagColor" v-if="item.tag">{{
            item.tag
          }}</vs-chip>
        </h-nav-menu-item>
      </div>
    </li>

    <contactoModal
      :active="activeContacto"
      @closeContactoModal="activeContacto = false"
    />
  </ul>
</template>
<script>
import HNavMenuGroup from "./HorizontalNavMenuGroup.vue";
import HNavMenuHeader from "./HorizontalNavMenuHeader.vue";
import HNavMenuItem from "./HorizontalNavMenuItem.vue";
// import contacto_modal from "@/views/contacto/contacto.vue";

export default {
  props: {
    // navbarColor  : { type: String, default: "#fff", },
    // navMenuItems: { type: Array, required: true },
    showIt: { type: Boolean, default: false },
  },
  data() {
    return {
      activeContacto: false,
    };
  },
  components: {
    HNavMenuGroup,
    HNavMenuHeader,
    HNavMenuItem,
    // "contacto-modal": contacto_modal,
    // Modal: "@/components/modal/modal.vue";
    contactoModal: () => import("@/views/contacto/contacto.vue"),
  },
  computed: {
    menuItems: function () {
      // return this.$store.state.menu.navMenuItems;
      return this.$store.getters["menu/get_Navbar"]
    },
    navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff";
    },
  },
  methods: {
    checkGrpChildrenActive(group) {
      const path = this.$route.fullPath;
      let active = false;
      const routeParent = this.$route.meta
        ? this.$route.meta.parent
        : undefined;

      if (group.submenu) {
        group.submenu.forEach((item) => {
          if (active) return true;
          if ((path == item.url || routeParent == item.slug) && item.url) {
            active = true;
          } else if (item.submenu) {
            this.checkGrpChildrenActive(item);
          }
        });
      }

      return active;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/horizontalNavMenu.scss";
</style>
