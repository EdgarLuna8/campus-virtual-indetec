<!-- =========================================================================================
  Description: Valoraciones generales del curso para 5,4,3,2 y 1 estrellitas
  Receive: 
    calificaciones: { type: Object }
  Author: Maggy
========================================================================================== -->

<template>
  <div>
    
    <div class=" flex items-center flex-wrap">
      <span class="text-6xl font-medium">4.3</span>
      <span class="pl-3">
        <star-rating :show-rating="false" :rating="5" :star-size="20" read-only />
        <span>{{calificaciones.num_comentarios}} Comentarios</span>
      </span>
    </div>
    <div class="">
      <p class="flex items-center flex-wrap">
        <vs-progress class="w-1/3" :height="10" :percent="75" color="#24c1a0">HEX</vs-progress>
        <span class="pl-3 text-2xl leading-none font-medium text-primary">
          <star-rating class="w-1/3" :show-rating="false" :rating="5" :star-size="20" read-only />
        </span>
        <span class="cursor-pointer leading-none mt-2 pr-3">
          <span class="font-medium">{{calificaciones.porcentajes.cinco}}%</span>
        </span>
      </p>
      <p class="flex items-center flex-wrap">
        <vs-progress class="w-1/3" :height="10" :percent="60" color="#24c1a0">HEX</vs-progress>
        <span class="pl-3 text-2xl leading-none font-medium text-primary">
          <star-rating class="w-1/3" :show-rating="false" :rating="4" :star-size="20" read-only />
        </span>
        <span class="cursor-pointer leading-none mt-2 pr-3">
          <span class="font-medium">{{calificaciones.porcentajes.cuatro}}%</span>
        </span>
      </p>
      <p class="flex items-center flex-wrap">
        <vs-progress class="w-1/3" :height="10" :percent="45" color="#24c1a0">HEX</vs-progress>
        <span class="pl-3 text-2xl leading-none font-medium text-primary">
          <star-rating class="w-1/3" :show-rating="false" :rating="3" :star-size="20" read-only />
        </span>
        <span class="cursor-pointer leading-none mt-2 pr-3">
          <span class="font-medium">{{calificaciones.porcentajes.tres}}%</span>
        </span>
      </p>
      <p class="flex items-center flex-wrap">
        <vs-progress class="w-1/3" :height="10" :percent="30" color="#24c1a0">HEX</vs-progress>
        <span class="pl-3 text-2xl leading-none font-medium text-primary">
          <star-rating class="w-1/3" :show-rating="false" :rating="2" :star-size="20" read-only />
        </span>
        <span class="cursor-pointer leading-none mt-2 pr-3">
          <span class="font-medium">{{calificaciones.porcentajes.dos}}%</span>
        </span>
      </p>
      <p class="flex items-center flex-wrap">
        <vs-progress class="w-1/3" :height="10" :percent="15" color="#24c1a0">HEX</vs-progress>
        <span class="pl-3 text-2xl leading-none font-medium text-primary">
          <star-rating class="w-1/3" :show-rating="false" :rating="1" :star-size="20" read-only />
        </span>
        <span class="cursor-pointer leading-none mt-2 pr-3">
          <span class="font-medium">{{calificaciones.porcentajes.una}}%</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
    props:['calificaciones'],
    components: {
    StarRating
  },
};
</script>