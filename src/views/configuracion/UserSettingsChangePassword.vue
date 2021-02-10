<template>
  <vx-card no-shadow>

    <vs-input class="w-full mb-base" label-placeholder="Actual Password" v-model="old_password" />
    <vs-input class="w-full mb-base" label-placeholder="Nuevo Password" v-model="new_password" />
    <vs-input class="w-full mb-base" label-placeholder="Confirmar Password" v-model="confirm_new_password" />

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Guardar Cambios</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reiniciar</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data () {
    return {
      old_password: '',
      new_password: '',
      confirm_new_password: ''
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  }
}
</script>
