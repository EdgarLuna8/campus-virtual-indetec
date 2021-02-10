<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="relative">
    <div class="vx-navbar-wrapper navbar-full p-0">
      <vs-navbar
        class="navbar-custom navbar-skelton"
        :class="navbarClasses"
        :style="navbarStyle"
        style="padding: 0rem 2.2rem;"
        :color="navbarColor"
      >

        <!-- <bookmarks :navbarColor="navbarColor" v-if="windowWidth >= 992" /> -->

        <router-link tag="div" to="/" class="vx-logo cursor-pointer mr-auto flex items-center">
          <logo class="w-10 mr-4 fill-current text-primary" />
          <!-- <span class="vx-logo-text text-primary">Campus Virtual</span> -->
        </router-link>

        <categories-menu :showIt="true" />

        <search-bar />

        <!-- <wish-drop-down /> -->

        <!-- <cart-drop-down /> -->        
        <notification-drop-down v-if="get_token" />

        <login-register v-if="!get_token" />
        
        <profile-drop-down v-else />
      </vs-navbar>
    </div>
  </div>
</template>

<script>
import Bookmarks from "./components/Bookmarks.vue";
import SearchBar from "./components/SearchBar.vue";
import WishListDropDown from "./components/WishListDropDown.vue";
import CartDropDown from "./components/CartDropDown.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";
import LoginRegister from "./components/LoginRegister.vue";
import Logo from "../Logo.vue";
import Categories from "@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue";
// import Categories from "./components/categories-menu/categories-menu.vue";

export default {
  name: "the-navbar-horizontal",
  props: {
    logo: { type: String },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    Logo,
    Bookmarks,
    SearchBar,
    "wish-drop-down": WishListDropDown,
    CartDropDown,
    NotificationDropDown,
    "login-register": LoginRegister,
    ProfileDropDown,
    "categories-menu": Categories
  },
  computed: {
    get_token: function () {
      return this.$store.state.token;
    },
    navbarColor() {
      let color = "#fff";
      if (this.navbarType === "sticky") color = "#f7f7f7";
      else if (this.navbarType === "static") {
        if (this.scrollY < 50) {
          color = "#fff";
        }
      }

      this.isThemedark === "dark"
        ? color === "#fff"
          ? (color = "#10163a")
          : (color = "#262c49")
        : null;

      return color;
    },
    isThemedark() {
      return this.$store.state.theme;
    },
    navbarStyle() {
      return this.navbarType === "static"
        ? { transition: "all .25s ease-in-out" }
        : {};
    },
    navbarClasses() {
      return this.scrollY > 5 && this.navbarType === "static"
        ? null
        : "d-theme-dark-light-bg shadow-none";
    },
    scrollY() {
      return this.$store.state.scrollY;
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
};
</script>

