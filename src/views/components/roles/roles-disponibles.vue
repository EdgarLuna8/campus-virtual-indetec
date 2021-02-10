<!-- =========================================================================================
    File Name: StatisticsCard.vue
    Description: Statistics card component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card class="overflow-hidden" @click="cambiar_perfil(data)">
    <div slot="no-body">
      <div class="p-6 text-center">
        <feather-icon
          :icon="data.icon"
          class="p-3 inline-flex rounded-full text-primary mb-4"
          style="background: rgba(var(--vs-primary), 0.15)"
        ></feather-icon>
        <div class="truncate">
          <h2 class="mb-1 font-bold">{{ data.nombre }}</h2>
        </div>
      </div>
    </div>
  </vx-card>
</template>

<script>
/**
 * Éste es un componente que muestra el listado de roles disponibles del usuario
 * @displayName Roles
 */
export default {
  props: {
    /**
     * Cada rol del usuario
     */
    data: {
      type: Object,
    },
  },
  methods: {
    /**
     * Éste método hace el cambio del rol del usuario, posteriormente redireccionada al path del rol seleccionado
     * @param {object} rol - Objeto del rol seleccionado
     * @event cambiar_perfil - Getter's method
     * @public
     */
    cambiar_perfil: function (rol) {
      this.$store.dispatch("account/cambiar_perfil", rol);
      this.$router.push(rol.path);
    },
  },
};
</script>
