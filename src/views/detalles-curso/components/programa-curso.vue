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
  <div
    v-if="plan_estudios.length > 0 || especialidad != ''"
    class="centrar w-full md:w-3/5 md:w-full lg:w-3/5 xl:w-3/5"
  >
    <vs-collapse type="border" open>
      <vs-collapse-item
        icon-pack="feather"
        icon-arrow="icon-arrow-down"
        v-for="item in plan_estudios"
        :key="item.clave"
      >
        <div slot="header">
          <div>
            <p class="font-semibold">{{ item.nombre }}</p>
            <small class="activity-desc">{{ item.objetivo }}</small>
          </div>
          <small class="text-grey activity-e-time"
            ><b>Clave {{ item.clave }}</b></small
          >
        </div>

        <vs-list>
          <vs-list-header
            title="Expertos"
            icon-pack="feather"
            icon="icon-users"
          ></vs-list-header>
          <vs-list-item
            v-for="subtema in item.expertos"
            :key="subtema.id"
            class="cursor-default"
            icon-pack="feather"
            icon="icon-user"
            :title="subtema.nombre_completo"
            :subtitle="subtema.email"
          >
          </vs-list-item>
        </vs-list>
      </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
import { get_data } from "@/http/oferta-academica";

export default {
  props: {
    especialidad: {
      type: String,
      default: "",
    },
    // detalle_programa: {
    //   type: Array,
    //   default: function() {
    //     return [];
    //   }
    // },
  },
  data() {
    return {
      plan_estudios: [],
    };
  },
  watch: {
    especialidad: function () {
      this.get_planEstudios();
    },
  },
  created: function () {
    console.log("Se crea componente");
    this.get_planEstudios();
  },
  methods: {
    get_planEstudios: function () {
      get_data({ action: 1, id_plan: this.especialidad })
        .then((response) => {
          this.plan_estudios = response.data.materias;
          // var menu = response.data.status === 200 ? response.data.menu : [];

          // this.$store.dispatch("menu/loadMenu", { menu: menu, nivel: 2 });

          // this.$router.push(path);
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    entrarLeccion: function () {
      alert("Entrando a la lección");
    },
  },
};
</script>