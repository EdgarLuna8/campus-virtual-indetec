<template>
  <div>
    <vs-divider position="left">
      <h2 style="display: inline; color: #626262;">Cuenta</h2>
    </vs-divider>

    <vs-tabs
      :position="isSmallerScreen ? 'top' : 'left'"
      class="tabs-shadow-none"
      id="profile-tabs"
      :key="isSmallerScreen"
    >
      <!-- GENERAL -->
      <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'General' : ''">
        <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-general />
        </div>
      </vs-tab>
      <vs-tab
        icon-pack="feather"
        icon="icon-lock"
        :label="!isSmallerScreen ? 'Cambiar contraseña' : ''"
      >
        <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-change-password />
        </div>
      </vs-tab>
      <vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Información' : ''">
        <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
          <user-settings-info />
        </div>
      </vs-tab>
      <vs-tab icon-pack="feather" icon="icon-credit-card" :label="!isSmallerScreen ? 'Pagos Realizados' : ''">
      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-payments />
      </div>
      </vs-tab>
      <vs-tab icon-pack="feather" icon="icon-cloud" :label="!isSmallerScreen ? 'Documentación' : ''">
      <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-payments />
      </div>
      </vs-tab>
      <!-- <vs-tab icon-pack="feather" icon="icon-link-2" :label="!isSmallerScreen ? 'Cuentas' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-connections />
      </div>
      </vs-tab>-->
      <vs-tab icon-pack="feather" icon="icon-bell" :label="!isSmallerScreen ? 'Notificaciones' : ''">
      <div class="tab-text md:ml-4 md:mt-0 mt-4 ml-0">
        <user-settings-notifications />
      </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import UserSettingsGeneral from "./UserSettingsGeneral.vue";
import UserSettingsChangePassword from "./UserSettingsChangePassword.vue";
import UserSettingsInfo from "./UserSettingsInfo.vue";
import UserSettingsPayments from "./UserSettingsPayments.vue";
import UserSettingsSocialLinks from "./UserSettingsSocialLinks.vue";
import UserSettingsConnections from "./UserSettingsConnections.vue";
import UserSettingsNotifications from "./UserSettingsNotifications.vue";

// import func from '../../../vue-temp/vue-editor-bridge';

export default {
  components: {
    UserSettingsGeneral,
    UserSettingsChangePassword,
    UserSettingsInfo,
    UserSettingsPayments,
    UserSettingsSocialLinks,
    UserSettingsConnections,
    UserSettingsNotifications
  },
  data() {
    return {};
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  }
  
};
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
