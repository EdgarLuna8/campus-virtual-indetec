<template>
  <div class="the-navbar__user-meta flex items-center" v-if="get_token">
    <div class="text-right leading-tight sm:block">
      <p class="font-semibold">{{ get_Nombre }}</p>
      <small>{{ get_Rol.nombre }}</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="con-img ml-3">
        <img
          v-if="get_userImage"
          key="onlineImg"
          :src="get_userImage"
          alt="user-img"
          width="40"
          height="40"
          class="rounded-full shadow-md cursor-pointer block step-1"
        />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 15rem">
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="retirectTo('/configuracion')"
          >
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Cuenta</span>
          </li>
          
          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="retirectTo('/apps/email/')">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tramites</span>
          </li>

          <!-- <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="retirectTo('/apps/email')">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Mensajes</span>
          </li>-->

          <!-- <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Historial de Compras</span>
          </li>-->
          <li
            :class="$route.path == '/mis-cursos' ? 'text-primary' : ''"
            @click="retirectTo('/mis-cursos')"
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
          >
            <feather-icon icon="MonitorIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Mis cursos</span>
          </li>
          <li
            :class="$route.path == '/dashboard' ? 'text-primary' : ''"
            @click="retirectTo('/dashboard')"
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
          >
            <feather-icon icon="GridIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Administración</span>
          </li>
          <vs-divider class="m-1" />
          <li
            @click="retirectTo('/ayuda')"
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
          >
            <feather-icon icon="HelpCircleIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Ayuda</span>
          </li>
          <li
            @click="retirectTo('/seleccion-rol')"
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
          >
            <feather-icon icon="ShuffleIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Cambiar perfil</span>
          </li>
          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout"
          >
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Salir</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    get_token: function () {
      return this.$store.state.token;
    },
    get_Nombre: function () {
      return this.$store.getters["account/get_Nombre"];
    },
    get_userImage() {
      return this.$store.getters["account/get_imagenUsuario"];
    },
    get_Rol: function () {
      return this.$store.getters["account/get_Rol"];
    },
  },
  methods: {
    logout() {
      this.retirectTo("/pages/login").catch(() => {});
    },
    retirectTo: function (path, params) {
      let redirect = { path: path, params: params };
      this.$children[0]._data.vsDropdownVisible = false;
      this.$children[0].$children[0]._data.dropdownVisible = false;

      this.$router.push(redirect).catch(() => {});
    },
  },
};
</script>
