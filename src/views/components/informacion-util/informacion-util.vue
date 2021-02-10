<template>
  <vs-tabs alignment="center">
    <vs-tab label="Aspirantes">
      <div class="vx-row">
        <div
          v-for="info in informacion"
          :key="info.id"
          class="vx-col w-full sm:w-1/1 md:w-1/2 lg:w-1/2 mt-12 md:mt-0"
        >
          <div class="vs-con-items mb-3" style="justify-content: left;">
            <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" />
            <div class="the-navbar__user-meta flex items-left">
              <div class="text-left leading-tight hidden sm:block">
                <p class="font-semibold">{{ info.titulo }}</p>
                <small>{{ info.descripcion }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vs-tab>
    <vs-tab label="Alumnos">
      <div class="vx-row">
        <div
          v-for="info in informacion"
          :key="info.id"
          class="vx-col w-full sm:w-1/1 md:w-1/2 lg:w-1/2 mt-12 md:mt-0"
        >
          <div class="vs-con-items mb-3" style="justify-content: left;">
            <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" />
            <div class="the-navbar__user-meta flex items-left">
              <div class="text-left leading-tight hidden sm:block">
                <p class="font-semibold">{{ info.titulo }}</p>
                <small>{{ info.descripcion }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vs-tab>
    <vs-tab label="Egresados">
      <div class="vx-row">
        <div
          v-for="info in informacion"
          :key="info.id"
          class="vx-col w-full sm:w-1/1 md:w-1/2 lg:w-1/2 mt-12 md:mt-0"
        >
          <div class="vs-con-items mb-3" style="justify-content: left;">
            <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" />
            <div class="the-navbar__user-meta flex items-left">
              <div class="text-left leading-tight hidden sm:block">
                <p class="font-semibold">{{ info.titulo }}</p>
                <small>{{ info.descripcion }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  data() {
    return {
      informacion: [
        {
          id: 1,
          titulo: "Registro de trámites",
          descripcion: "Pasos a seguir, cambios de aspiración y publicación de resultados"
        },
        {
          id: 2,
          titulo: "Seguimiento de trámites",
          descripcion: "Dar seguimiento a tu trámite de ingreso"
        },
        {
          id: 3,
          titulo: "Documentación requerida",
          descripcion: "Para todos los niveles"
        },
        {
          id: 4,
          titulo: "Oferta académica",
          descripcion: "Catálogo de programas educativos"
        },
        {
          id: 5,
          titulo: "Calendarios oficiales",
          descripcion: "Escolares y de trámites para aspirantes"
        }
      ]
    };
  }
};
</script>