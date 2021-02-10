<!-- =========================================================================================
  Description: Componente principal de lista de deseos
  Receive: ---
  Author: DanyCristhian
========================================================================================== -->

<template>
  <div class="flex flex-wrap">
    <div
      class="faq-jumbotron-content w-full p-8 rounded-lg mb-base bg-primary w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto pb-6"
    >
      <h1 class="mb-1 text-white">¿No encuentras tu favorito?</h1>
      <vs-input
        placeholder="Escribe el nombre"
        v-model="searchWish"
        icon-pack="feather"
        icon="icon-search"
        size="large"
        class="w-full mt-6"
        icon-no-border
      />
    </div>

    <!-- <div class="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto pb-6">
      <WishList-view :wishFilter="searchWish" />
    </div>-->

    <div id="ecommerce-wishlist-demo" class="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto pb-6">
      <div class="items-grid-view vx-row match-height" v-if="getWishList(searchWish).length" appear>
        <div
          class="vx-col lg:w-1/4 md:w-1/3 sm:w-1/2 w-full"
          v-for="item in getWishList(searchWish)"
          :key="item.id"
        >
          <item-grid-view :item="item">
            <!-- SLOT: ACTION BUTTONS -->
            <template slot="action-buttons">
              <div class="flex flex-wrap">
            <div
              class="item-view-primary-action-btn p-3 flex flex-grow items-center justify-center cursor-pointer"
              @click="removeItemFromWishList(item)"
            >
              <feather-icon icon="XIcon" svgClasses="h-4 w-4" />

              <span class="text-sm font-semibold ml-2">Quitar</span>
            </div>
            <div
              class="item-view-secondary-action-btn bg-primary p-3 flex flex-grow items-center justify-center text-white cursor-pointer"
              @click="cartButtonClicked(item)"
            >
              <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" />

              <span class="text-sm font-semibold ml-2" v-if="isInCart(item.id)">Ver carrito</span>
              <span class="text-sm font-semibold ml-2" v-else>Añadir</span>
            </div>
          </div>
            </template>
          </item-grid-view>
        </div>
      </div>

      <vx-card v-else-if="searchWish != ''">
        <div class="text-center">
          <h4 class="mb-6 mt-6">No hay artículos relacionados con esta búsqueda.</h4>
        </div>
      </vx-card>

      <!-- IF NO ITEMS IN CART -->
      <vx-card v-else>
        <div class="text-center">
          <h4 class="mb-6">No tienes artículos en la lista de deseos.</h4>
          <vs-button class="text-center" to="/">Ir al inicio</vs-button>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
// import view_item from "./components/ItemGridView.vue";
import ItemGridView from "../components/vista-curso/ItemGridView.vue";

export default {
  data() {
    return {
      searchWish: ""
    };
  },
  computed: {
    getWishList: function() {
      return name => this.$store.getters["eCommerce/getWishList"](name);
    },
    isInCart() {
      return itemId => this.$store.getters["eCommerce/isInCart"](itemId);
    }
  },
  methods: {
    removeItemFromWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    cartButtonClicked(item) {
      if (this.isInCart(item.id))
        this.$router.push("/carrito-compras").catch(() => {});
      else {
        this.additemInCart(item);
        // this.removeItemFromWishList(item);
      }
    },
    additemInCart(item) {
      this.$store.dispatch("eCommerce/additemInCart", item);
    }
  },
  components: {
    // "WishList-view": view_item,
    ItemGridView
  }
};
</script>