<template>
  <div>
    <div class="vx-row mb-5">
      <div
        v-for="(opc, index) in opciones"
        :key="index"
        class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
        :style="(componentSelected != opc.id) ? 'opacity: 55%;' : ''"
        @click="cambiarContenido(opc);"
      >
        <statistics-card-line
          :icon="opc.icon"
          :color="(componentSelected == opc.id) ? opc.color : ''"
          :statistic="opc.nombre"
          :statisticTitle="opc.descripcion"
          hideChart
          iconRight
        />
      </div>
    </div>

    <transition name="slide-fade">
      <adminCursos v-if="showComponent.cursos" />
      <adminAlumnos v-if="showComponent.alumnos" />
    </transition>
  </div>
</template>

<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";

export default {
  data() {
    return {
      inputBusqueda: "",
      componentSelected: 1,
      showComponent: {
        cursos: true,
        alumnos: false,
        profesor: false,
        padre: false,
      },
      opciones: [
        {
          id: 1,
          nombre: "Cursos",
          descripcion: "Listado de cursos",
          icon: "MonitorIcon",
          color: "primary",
          showComponent: true,
        },
        {
          id: 2,
          nombre: "Alumnos",
          descripcion: "Alumnos en plataforma",
          icon: "UsersIcon",
          color: "purple",
          showComponent: false,
        },
        {
          id: 3,
          nombre: "Profesores",
          descripcion: "Profesores registrados a plataforma",
          icon: "ClipboardIcon",
          color: "danger",
          showComponent: false,
        },
        {
          id: 4,
          nombre: "Padres de familia",
          descripcion: "Listado de padres de familia",
          icon: "EyeIcon",
          color: "warning",
          showComponent: false,
        },
      ],
    };
  },
  components: {
    StatisticsCardLine,
    adminCursos: () => import("./components/cursos/adminCursos.vue"),
    adminAlumnos: () => import("./components/alumnos/adminAlumnos.vue"),
  },
  computed: {
    getCourseList: function () {
      return (search) => this.$store.getters["courses/getCourseList"](search);
    },
  },
  methods: {
    cambiarContenido: function (option) {
      this.showComponent = {
        cursos: false,
        alumnos: false,
        profesor: false,
        padre: false,
      };
      // this.opciones.forEach(element => {
      //   element.showComponent = false;
      // });
      this.componentSelected = option.id;

      switch (option.id) {
        case 1:
          this.showComponent.cursos = true;
          // option.showComponent = true;
          break;
        case 2:
          this.showComponent.alumnos = true;
          // option.showComponent = true;
          break;
        case 3:
          this.showComponent.profesor = true;
          // option.showComponent = true;
          break;
        case 4:
          this.showComponent.padre = true;
          // option.showComponent = true;
          break;
      }
    },
  },
  created: function () {
    console.log(this.$route);
  },
  // beforeRouteEnter(to, from, next) {
  //   next(() => {
  //     // vm.from = from;
  //     console.log("from", from);
  //   });
  // },
};
</script>
