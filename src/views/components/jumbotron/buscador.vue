<template>
  <div id="faq-page">
    
    <!-- JUMBOTRON -->
    <div class="faq-jumbotron">
      <div class="faq-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
        <h1 class="mb-1 text-white">¿Buscas algún curso?</h1>
        <!-- <p
          class="text-white"
        >Bonbon sesame snaps lemon drops marshmallow ice cream carrot cake croissant wafer.</p> -->
        <vs-input
          placeholder="Search"
          v-model="textSearch"
          icon-pack="feather"
          icon="icon-search"
          size="large"
          class="w-full mt-6"
          icon-no-border
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "jumbotron-search-input",
  data() {
      return {
          textSearch: ""
      }
  }
  // props: {
  //   inputText: { type: String, default: "" }
  // },
  // watch: {
  //   inputText: function(val) {
  //       this.textSearch = val
  //   }
  // }
};
</script>