<!-- =========================================================================================
  Description: Ficha con los datos del instructor
  Receive: 
    preguntas_frec: Array
  Author: Maggy
========================================================================================== -->
<template>
  <vs-collapse  accordion type="margin" class="p-0">
    <vs-collapse-item v-for="que in preguntas_frec" class="faq-bg rounded-lg" :key="que.id">
      <div slot="header">
        <h5>{{ que.question }}</h5>
      </div>
      <p>{{ que.ans }}</p>
    </vs-collapse-item>
  </vs-collapse>
</template>

<script>
export default {
  props: ["preguntas_frec"]
};
</script>