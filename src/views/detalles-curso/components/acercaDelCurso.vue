<!-- =========================================================================================
  Description: Contiene los contenidos del programa para realizar el listado de:
    tema
    subtema
    y descripcion de cada uno de ellos, duracion en tiempo, numero de videos y la forma de entrar a cada lección
  Receive: 
    detalle_programa: { type: Array }
  Author: Maggy
========================================================================================== -->
<template>
  <div class="flex items-center flex-wrap">
    <div class="vx-row">
      <div class="vx-col w-2/3 flex-1">
        <h5 class="font-semibold p-6 text-primary">Objetivos</h5>

        <div class="text-justify">{{acerca.descripcion}}</div>
        <vs-list>
          <vs-list-header class="p-6" title="Perfil de egreso"></vs-list-header>
          <vs-list-item
            v-for="aprendizaje in acerca.aprendizaje"
            :key="aprendizaje.id"
            icon="check"
            :title="aprendizaje.nombre"
          ></vs-list-item>
        </vs-list>
      </div>
      <div class="vx-col w-full md:w-w-1/3 md:w-1/3 lg:w-w-1/3 xl:w-w-1/3" id="avatar-col">
        <vs-list>
          <vs-list-header icon="how_to_reg" title="Perfil de Ingreso" color="success"></vs-list-header>
          <vs-list-item
            v-for="requisitos in acerca.requisitos"
            :key="requisitos.id"
            icon="verified_user"
            :title="requisitos.nombre"
          ></vs-list-item>
        </vs-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    acerca: {
      type: Object,
      default: function() {
        return [];
      }
    }
  }
};
</script>