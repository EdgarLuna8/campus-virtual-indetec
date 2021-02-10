<template>
  <div class="mail__mail-item sm:px-4 px-2 py-6">
    <div class="flex w-full">
      <div class="flex w-full justify-between items-start">
        <div class="mail__details">
          <h5 class="mb-1 font-semibold">{{ item.nombre }}</h5>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4">
        <p class="font-semibold">Avance {{ item.avance }}%</p>
        <vs-progress :percent="item.avance" :color="(item.avance == 100) ? 'success' : 'warning'"></vs-progress>
      </div>
      <div class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4">
        <p class="font-semibold">Estado</p>
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-chip
              :color="(item.avance == 100) ? 'success' : 'warning'"
            >{{ (item.avance == 100) ? 'Terminado' : 'En proceso' }}</vs-chip>
          </vs-col>
        </vs-row>
      </div>
      <div class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4">
        <p class="font-semibold">Materiales</p>
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-button color="primary" type="line" icon-pack="feather" icon="icon-edit"></vs-button>
          </vs-col>
        </vs-row>
      </div>
      <div class="vx-col w-full sm:w-1/1 md:w-1/4 lg:w-1/4 text-center mt-4">
        <p class="font-semibold">Fecha</p>
        <p>{{ item.fecha }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

