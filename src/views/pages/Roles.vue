<!-- =========================================================================================
    File Name: Error404.vue
    Description: 404 Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img">

    <div
      class="vx-col flex items-center justify-center flex-col sm:w-1/2 md:w-3/5 lg:w-3/4 xl:w-1/2 mx-auto text-center"
    >
    
    <vs-alert color="dark" title="Inicio de sesión exitoso" :active.sync="showSaludo" class="mb-10">
      Hola nuevamente <b>{{ get_Nombre }}</b>, es un gusto volver a tenerte por aquí.
    </vs-alert>

      <p>Seleccione el perfil con el que desea continuar.</p>

      <div class="vx-row mt-5">
        <div
          v-for="rol in roles"
          :key="rol.id"
          class="vx-col w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/2"
        >
          <vx-tooltip :text="rol.nombre" class="roles">
            <roles-disponibles class="mb-base" :data="rol" />
          </vx-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Roles from "../components/roles/roles-disponibles.vue";

/**
* Éste módulo muestra la pantalla posterior al inicio de sesión, una vez gestionado por el router al recibir un token como parámetro (puede omitirse si el usuario cuenta con sólo un rol disponible)
* @displayName Roles
* @requires ../components/roles/roles-disponibles.vue
* @example [none]
*/
export default {
  components: {
    "roles-disponibles": Roles,
  },
  data() {
    return {
      showSaludo: false,
      roles: [
        {
          id: 1,
          nombre: "Administrador",
          icon: "LockIcon",
          path: '/dashboard'
        },
        {
          id: 2,
          nombre: "Alumno",
          icon: "UserIcon",
          path: 'mis-cursos'
        },
        {
          id: 3,
          nombre: "Profesor",
          icon: "ClipboardIcon",
          path: '/dashboard'
        },
        {
          id: 4,
          nombre: "Padre de familia",
          icon: "EyeIcon",
          path: '/dashboard'
        },
      ],
    };
  },
  created: function () {
    setTimeout(() => { this.showSaludo = true }, 200);
    setTimeout(() => { this.showSaludo = false }, 10000);
  },
  computed: {
    /**
    * Función computada que regresa el nombre compelto del usuario logeado
    * @public 
    */
    get_Nombre: function () {
      return this.$store.getters["account/get_Nombre"];
    }
  },
};
</script>

<style lang="stylus" scoped>
.roles {
  cursor: pointer;
}
</style>