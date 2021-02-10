<template>
  <vx-card no-shadow>

    <div class="mb-base">
      <h6 class="mb-4">Actividad</h6>

      <div class="flex items-center mb-4">
        <vs-switch v-model="comment" />
        <span class="ml-4">Envíame un correo electrónico cuando alguien comente mi artículo</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="answer" />
        <span class="ml-4">Envíame un correo electrónico cuando alguien responda en mi formulario</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="follow" />
        <span class="ml-4">Envíame un correo electrónico cuando alguien me siga</span>
      </div>
    </div>

    <div>
      <h6 class="mb-4">Aplicaciones</h6>

      <div class="flex items-center mb-4">
        <vs-switch v-model="news" />
        <span class="ml-4">Noticias y anuncios</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="product_update" />
        <span class="ml-4">Actualizaciones semanales de productos</span>
      </div>
      <div class="flex items-center">
        <vs-switch v-model="blog" />
        <span class="ml-4">Resumen semanal del blog</span>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end mt-base">
      <vs-button class="ml-auto mt-2">Guardar Cambios</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reiniciar</vs-button>
    </div>

  </vx-card>
</template>

<script>
export default {
  data () {
    return {
      comment: true,
      answer: true,
      follow: false,
      news: false,
      product_update: false,
      blog: true
    }
  },
  computed: {
    
  }
}
</script>
