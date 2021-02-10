<!-- =========================================================================================
  Description: Ficha con los datos del instructor
  Receive: 
    user_data: Object
  Author: Maggy
========================================================================================== -->
<template>
  <div>
    <div title class="mb-base pt-6">
      <!-- Avatar -->
      <div class="vx-row pb-20" v-for="item in user_data" :key="item.id">
        <!-- Information - Col 1 -->
        <div class="vx-col flex-1">
          <table>
            <tr>
              <td class="font-semibold">
                <h2>{{ item.nombre }}</h2>
              </td>
            </tr>
            <tr>
              <td class="font-semibold pt-3">
                <h5>{{ item.titulo }}</h5>
              </td>
            </tr>
            <tr>
              <td class="text-sm">{{ item.area }}</td>
            </tr>
            <tr>
              <td class="pt-5 flex items-center flex-wrap">
                <feather-icon icon="StarIcon" svgClasses="stroke-current text-primary w-6 h-6" />
                &nbsp;&nbsp;{{item.califInst}}&nbsp;Calificación Instructor
              </td>
            </tr>
            <tr>
              <td class="pt-2 flex items-center flex-wrap">
                <feather-icon
                  icon="MessageCircleIcon"
                  svgClasses="stroke-current text-primary w-6 h-6"
                />
                &nbsp;&nbsp;{{item.comentarios}}&nbsp;Comentarios
              </td>
            </tr>
            <tr>
              <td class="pt-2 flex items-center flex-wrap">
                <feather-icon icon="UsersIcon" svgClasses="stroke-current text-primary w-6 h-6" />
                &nbsp;&nbsp;{{item.estudiantes}}&nbsp;Estudiantes
              </td>
            </tr>
            <tr>
              <td class="pt-2 flex items-center flex-wrap">
                <feather-icon icon="MonitorIcon" svgClasses="stroke-current text-primary w-6 h-6" />
                &nbsp;&nbsp;{{item.cursos}}&nbsp;Cursos
              </td>
            </tr>
            <tr>
              <td class="pt-10">
                <div class="flex items-center flex-wrap">
                  <vs-button
                    class="mr-4 mb-4"
                    icon-pack="feather"
                    icon="icon-mail"
                    @click="enviarMensaje()"
                  >Hacer una pregunta</vs-button>
                  <vs-button
                    class="mr-4 mb-4"
                    type="flat"
                    color="primary"
                    icon-pack="feather"
                    icon="icon-play-circle"
                  >Ver video de presentación</vs-button>
                </div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Avatar Col -->
        <div class="vx-col" id="avatar-col">
          <div class="img-container mb-4">
            <img height="150" width="150" :src="item.avatar" class="rounded w-full" />
          </div>
        </div>
        <!-- /Information - Col 1 -->

        <div class="text-justify" id="informacion-instructor">
          <h5 class="font-semibold pt-3">Información acerca de mí</h5>
          <span>{{item.descripcion}}</span>
        </div>
      </div>
    </div>
    <vs-prompt
      title="Enviar una pregunta"
      @cancel="val=''"
      @accept="aceptarBoton"
      @close="cerrarBoton"
      :active.sync="activePrompt"
    >
      <div class="con-exemple-prompt">
        Escribe tu mensaje aqui
        <vs-textarea
          v-model="valMensaje"
          :counter-danger.sync="counterDanger"
          width="300px"
          height="100px"
        />
      </div>
    </vs-prompt>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePrompt: false,
      valMensaje: "",
      counterDanger: true
    };
  },
  props: ["user_data"],
  methods: {
    enviarMensaje: function() {
      this.activePrompt = true;
    },
    cerrarBoton: function() {
      this.activePrompt = false;
    },
    aceptarBoton: function() {
      this.activePrompt = false;
    }
  }
};
</script>
<style >
.centrar {
  margin: auto;
}
</style>