<!-- =========================================================================================
  File Name: ECommerceShop.vue
  Description: eCommerce Shop Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <vs-tabs
      :position="isSmallerScreen ? 'top' : 'left'"
      class="tabs-shadow-none"
      id="profile-tabs"
      :key="isSmallerScreen"
      :alignment="isSmallerScreen ? 'fixed' : ''"
    >
      <!-- GENERAL -->
      <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Cuenta' : ''">
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <tabUsuario :data="get_UserByID(parseInt(id))"/>
        </div>
      </vs-tab>

      <!-- GENERAL -->
      <!-- <vs-tab icon-pack="feather" icon="icon-at-sign" :label="!isSmallerScreen ? 'Cuenta' : ''">
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <tabUsuario :data="get_UserByID(parseInt(id))"/>
        </div>
      </vs-tab> -->

      <vs-tab icon-pack="feather" icon="icon-map-pin" :label="!isSmallerScreen ? 'Dirección' : ''">
        <div class="tab-direccion md:ml-4 md:mt-0 mt-4 ml-0">
          Datos de dirección
        </div>
      </vs-tab>

      <vs-tab icon-pack="feather" icon="icon-calendar" :label="!isSmallerScreen ? 'Fecha y hora' : ''">
        <div class="tab-horario md:ml-4 md:mt-0 mt-4 ml-0">
          Datos de horarios
        </div>
      </vs-tab>

      <vs-tab icon-pack="feather" icon="icon-users" :label="!isSmallerScreen ? 'Profesores' : ''">
        <div class="tab-profesor md:ml-4 md:mt-0 mt-4 ml-0">
          Datos de profesores
        </div>
      </vs-tab>

      <vs-tab
        icon-pack="feather"
        icon="icon-lock"
        :label="!isSmallerScreen ? 'Change Password' : ''"
      >
        <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
          <!-- <user-settings-change-password /> -->
          something
        </div>
      </vs-tab>

      <vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Info' : ''">
        <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
          <!-- <user-settings-info /> -->
          something
        </div>
      </vs-tab>

      <vs-tab
        icon-pack="feather"
        icon="icon-github"
        :label="!isSmallerScreen ? 'Social Links' : ''"
      >
        <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
          <!-- <user-settings-social-links /> -->
          something
        </div>
      </vs-tab>

      <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Connections' : ''">
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <!-- <user-settings-connections /> -->
          something
        </div>
      </vs-tab>

      <vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ? 'Notifications' : ''">
        <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
          <!-- <user-settings-notifications /> -->
          something
        </div>
      </vs-tab>
    </vs-tabs>
</template>


<script>
import tabUsuario from './tabs/tab-usuario.vue'
// import tabPersona from './tabs/tab-persona.vue'

export default {
  // props: {
  //   id: {
  //     type: Number,
  //     default: null,
  //   }
  // },
  components: {
    tabUsuario,
    // tabPersona
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    get_UserByID: function () {
      return (id) => this.$store.getters["alumnos/get_UserByID"](id);
    },
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    },
  },
  created() {
    // console.log(this.$route);
    console.log("Created edición alumnos");
  },
  destroyed() {
    console.log("Edición alumnos was destroyed");
  },
};
</script>
