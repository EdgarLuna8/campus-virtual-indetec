<!-- =========================================================================================
  File Name: ItemGridView.vue
  Description: Item Component - Grid VIew
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <!-- <div class="item-grid-view vx-row match-height">
  <div class="vx-col" :class="gridColumnWidth" v-for="item in items" :key="item.objectID">-->

  <vx-card
    class="grid-view-item mb-base overflow-hidden"
    v-on="$listeners"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <template slot="no-body">
      <!-- <vx-tooltip :title="item.name" :text="item.description" color="primary" position="right"> -->
        <div>
          <!-- ITEM IMAGE -->
          <div class="item-img-container bg-white flex items-center justify-center mb-4">
            <img :src="item.image" alt="Imagen de curso" class="grid-view-img" />
          </div>

          <div class="item-details px-4">
            <!-- SLOT: PRICE SECTION -->
            <slot name="price-section" />

            <!-- TITLE & DESCRIPTION -->
            <div class="my-4">
              <h6 class="truncate font-semibold mb-1">{{ item.name }}</h6>
              <p class="item-description truncate text-sm">{{ item.description }}</p>
            </div>
          </div>

          <!-- SLOT: ACTION BUTTONS -->
          <transition name="fade">
            <slot v-if="hover" name="action-buttons" />
          </transition>
        </div>
      <!-- </vx-tooltip> -->
    </template>
  </vx-card>
  <!--  </div>
  </div>-->
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    navigate_to_detail_view() {
      this.$router
        .push({
          name: "ecommerce-item-detail-view",
          params: { item_id: this.item.objectID },
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-view-item {
  .grid-view-img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    transition: 0.35s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);

    .grid-view-img {
      opacity: 0.9;
    }
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
