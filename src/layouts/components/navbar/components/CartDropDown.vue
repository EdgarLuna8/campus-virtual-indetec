<template>
  <!-- CART DROPDOWN -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <feather-icon icon="ShoppingCartIcon" class="cursor-pointer sm:mr-6 mr-2" :badge="cartItems.length" />
      <vs-dropdown-menu class="cart-dropdown vx-navbar-dropdown" :class="{'dropdown-custom': cartItems.length}">

          <!-- IF CART HAVE ITEMS: HEADER -->
          <template v-if="cartItems.length">
              <div class="notification-header text-center p-5 bg-primary text-white">
                  <p class="opacity-75">{{ cartItems.length }} Elemento<span v-show="cartItems.length > 1">s</span> en tu carrito de compras</p>
              </div>

              <!-- CART ITEMS -->
              <component :is="scrollbarTag" ref="mainSidebarPs" class="scroll-area--cart-items-dropdowm p-0 mb-10" :settings="settings" :key="$vs.rtl">
              <ul class="bordered-items">
                  <li
                    v-for="item in cartItems"
                    :key="item.id"
                    class="vx-row no-gutter cart-item cursor-pointer item-wishlist"
                    @click="redirectTo('/detalles-curso/1')">

                      <!-- IMG COL -->
                      <div class="vx-col w-1/5 item-img-container bg-white flex items-center justify-center">
                          <img :src="item.image" alt="item" class="cart-dropdown-item-img">
                      </div>

                      <!-- INFO COL -->
                      <div class="vx-col w-4/5 pr-4 pl-2 flex flex-col justify-center">
                          <div class="flex items-center justify-between">
                            <span class="font-medium block cart-item-title truncate">{{ item.name }}</span>
                            <feather-icon icon="TrashIcon" svgClasses="h-4 w-4 cursor-pointer text-danger" class="hover:text-warning" @click.stop="removeItemFromCart(item)" />
                          </div>
                          
                          <small class="truncate mb-2">{{ item.description }}</small>
                          <span class="text-sm font-medium">
                            <feather-icon icon="DollarSignIcon" svgClasses="text-success stroke-current h-3 w-3" />
                              {{ item.price }}
                          </span>                           
                      </div>
                  </li>
              </ul>
              </component>
              <div
                class=" checkout-footer fixed bottom-0 rounded-b-lg text-primary font-semibold w-full p-2 text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
                @click="redirectTo('/carrito-compras');">

                <span class="flex items-center justify-center">
                  <feather-icon icon="ShoppingCartIcon" svgClasses="h-4 w-4" />
                  <span class="ml-2">Ver carrito de compras</span>
                </span>

              </div>
          </template>

          <!-- IF CART IS EMPTY -->
          <template v-else>
              <p class="p-4">Tu carrito está vacío.</p>
          </template>
      </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    VuePerfectScrollbar
  },
  data () {
    return {
      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.eCommerce.cartItems.slice().reverse()
    },
    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    }
  },
  methods: {
    removeItemFromCart: function(item) {
      this.$store.dispatch('eCommerce/toggleItemInCart', item)
    },
    redirectTo: function(path, params) {
      let redirect = { path: path, params: params }
      this.$children[0]._data.vsDropdownVisible = false
      this.$children[0].$children[0]._data.dropdownVisible = false
      
      this.$router.push(redirect).catch(() => {})
    }
  }
}

</script>
