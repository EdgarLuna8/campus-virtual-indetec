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
      <vs-tab icon-pack="feather" icon="icon-monitor" :label="!isSmallerScreen ? 'General' : ''">
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <tabGeneral :id="parseInt(id)" :isSmallerScreen="isSmallerScreen" />
        </div>
      </vs-tab>

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
import tabGeneral     from './tabs/tab-general.vue'

export default {
  // props: {
  //   id: {
  //     type: Number,
  //     default: null,
  //   }
  // },
  components: {
    tabGeneral
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    get_EspecialidadByID: function () {
      return (id) => this.$store.getters["courses/get_EspecialidadByID"](id);
    },
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    },
  },
  created() {
    console.log(this.$route);
    console.log("Created edición cursos", this.id);
  },
  destroyed() {
    console.log("Edición cursos was destroyed");
  },
};
</script>
