<template>
  <vx-card no-shadow>

    <div class="flex flex-wrap justify-between items-center mb-8">
      <div>
        <p>La cuenta está conectada con Google.</p>
        <p class="font-medium mb-4">john@gmail.com</p>
      </div>
      <vs-button type="border" color="danger">Desconectar</vs-button>
    </div>

    <div class="flex flex-wrap justify-between items-center mb-base">
      <div>
        <p>La cuenta está conectada con Facebook.</p>
        <p class="font-medium mb-4">@pixinvents</p>
      </div>
      <vs-button type="border" color="danger">Desconectar</vs-button>
    </div>

    <vs-button color="#00aaff" icon-pack="feather" icon="icon-twitter" class="mb-6 ml-auto">Conectada a Twitter</vs-button>
    <vs-button color="#405DE6" icon-pack="feather" icon="icon-instagram" class="ml-auto">Conectada a Instagram</vs-button>

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
