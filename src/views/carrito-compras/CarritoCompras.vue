<!-- =========================================================================================
  Description: Componente principal de lista de deseos
  Receive: ---
  Author: DanyCristhian
========================================================================================== -->

<!-- =========================================================================================
  File Name: ECommerceCheckout.vue
  Description: eCommerce Checkout page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="w-full sm:w-1/1 md:w-1/1 lg:w-2/3 xl:w-2/3 ml-auto mr-auto pb-6">
    <div id="ecommerce-checkout-demo">
      <form-wizard
        ref="checkoutWizard"
        color="rgba(var(--vs-primary), 1)"
        :title="null"
        :subtitle="null"
        :hide-buttons="true"
      >
        <!-- tab 1 content -->
        <tab-content title="Carrito de compras" icon="feather icon-shopping-cart" class="mb-5">
          <!-- IF CART HAVE ITEMS -->
          <div class="vx-row" v-if="cartItems.length">
            <!-- LEFT COL -->
            <div class="vx-col lg:w-2/3 w-full relative scroll-list-Itemcart">
              <div class="items-list-view" v-for="(item, index) in cartItems" :key="item.id">
                <item-list-view :item="item" class="mb-base">
                  <!-- SLOT: ITEM META -->
                  <template slot="item-meta">
                    <router-link to="/detalles-curso/1">
                      <h6
                        class="item-name font-semibold mb-1 cursor-pointer hover:text-primary"
                        @click="$router.push({name: 'ecommerce-item-detail-view', params: {item_id: item.id }}).catch(() => {})"
                      >{{ item.name }}</h6>
                    </router-link>
                    <p class="text-sm mb-2">
                      Impartido por
                      <span class="font-semibold cursor-pointer">{{ item.by }}</span>
                    </p>
                    <p class="text-sm truncate">{{ item.description }}</p>

                    <p class="mt-4 font-bold text-sm">Cantidad</p>
                    <vs-input-number
                      min="1"
                      max="10"
                      :value="item.quantity"
                      @input="updateItemQuantity($event, index)"
                      class="inline-flex"
                    />

                    <p class="font-medium text-grey mt-4">
                      <feather-icon
                        icon="CalendarIcon"
                        svgClasses="text-success stroke-current h-4 w-4"
                      />
                      {{ item.date }}
                    </p>
                    <!-- <p class="text-success font-medium">{{ item.discount_in_percentage }}% off {{ item.offers_count }} offers Available</p> -->
                  </template>

                  <!-- SLOT: ACTION BUTTONS -->
                  <template slot="action-buttons">
                    <!-- PRIMARY BUTTON: REMOVE -->
                    <div
                      class="item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3"
                      @click="removeItemFromCart(item)"
                    >
                      <feather-icon icon="XIcon" svgClasses="h-4 w-4" />
                      <span class="text-sm font-semibold ml-2">Quitar</span>
                    </div>

                    <!-- SECONDARY BUTTON: MOVE-TO/VIEW-IN WISHLIST -->
                    <div
                      class="item-view-secondary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer"
                      @click="wishListButtonClicked(item)"
                    >
                      <feather-icon
                        icon="HeartIcon"
                        :svgClasses="[{'text-danger fill-current': isInWishList(item.id)}, 'h-4 w-4']"
                      />
                      <span
                        class="text-sm font-semibold ml-2"
                        v-if="isInWishList(item.id)"
                      >Ver lista de deseos</span>
                      <span class="text-sm font-semibold ml-2" v-else>Lo deseo</span>
                    </div>
                  </template>
                </item-list-view>
              </div>
            </div>

            <!-- RIGHT COL -->
            <div class="vx-col lg:w-1/3 w-full">
              <vx-card>
                <p class="font-semibold mb-3">Detalles de precios</p>
                <div class="flex justify-between mb-2" v-for="item in cartItems" :key="item.id">
                  <span
                    class="text-grey"
                  >{{ (item.quantity > 1) ? 'x'+ item.quantity : '' }} {{ item.name }}</span>
                  <span>${{ (item.quantity > 1) ? item.price * item.quantity : item.price }}</span>
                </div>

                <vs-divider />

                <div class="flex justify-between font-semibold mb-3">
                  <h5>Total</h5>
                  <h5>${{ totalToPay }}</h5>
                </div>

                <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">Continuar</vs-button>
              </vx-card>
            </div>
          </div>

          <!-- IF NO ITEMS IN CART -->
          <vx-card title="You don't have any items in your cart." v-else>
            <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
          </vx-card>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content title="Pago" icon="feather icon-credit-card" class="mb-5">
          <div class="vx-row">
            <!-- LEFT COL: PAYMENT OPTIONS -->
            <div class="vx-col lg:w-2/3 w-full">
              <vx-card
                title="Payment Options"
                subtitle="Be sure to click on correct payment option"
                class="mb-base"
              >
                <div class="mt-3">
                  <ul>
                    <!-- OPTION 1 -->
                    <li>
                      <!-- CARD DETAILS -->
                      <div class="flex flex-wrap justify-between items-center">
                        <vs-radio v-model="paymentMethod" vs-value="debit-card">
                          <div class="flex items-center">
                            <!-- <img src="@/assets/images/pages/eCommerce/bank.png" alt="bank-logo" height="40" width="50" class="inline-flex"> -->
                            <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>
                          </div>
                        </vs-radio>
                        <span>John Doe</span>
                        <span>11/2020</span>
                      </div>

                      <!-- CVV BLOCK -->
                      <form data-vv-scope="cvv-form">
                        <div class="flex items-center flex-wrap">
                          <span class="mt-4">Enter CVV:</span>
                          <vs-input name="cvv" v-model="cvv" class="mr-3 ml-2 mt-4" />
                          <vs-button
                            class="mt-4"
                            @click.prevent="makePayment"
                            :disabled="false"
                          >CONTINUE</vs-button>
                        </div>
                        <!-- <span v-show="errors.has('cvv-form.cvv')" class="text-danger ml-24">{{ errors.first('cvv-form.cvv') }}</span> -->
                      </form>
                    </li>

                    <vs-divider class="my-6" />

                    <!-- OPTION 2 -->
                    <li>
                      <vs-radio
                        v-model="paymentMethod"
                        vs-value="credit-debit-atmCard"
                      >Credit / Debit / ATM Card</vs-radio>
                    </li>

                    <!-- OPTION 3 -->
                    <li class="mt-2">
                      <vs-radio v-model="paymentMethod" vs-value="netBanking">Net Banking</vs-radio>
                    </li>

                    <!-- OPTION 4 -->
                    <li class="mt-2">
                      <vs-radio v-model="paymentMethod" vs-value="emi">EMI (Easy Installment)</vs-radio>
                    </li>

                    <!-- OPTION 5 -->
                    <li class="mt-2">
                      <vs-radio v-model="paymentMethod" vs-value="cashOnDelivery">Cash On Delivery</vs-radio>
                    </li>
                  </ul>

                  <vs-divider />

                  <!-- GIFT CARD -->
                  <div class="inline-flex items-center cursor-pointer">
                    <feather-icon icon="PlusSquareIcon" class="mr-2" svgClasses="h-6 w-6" />
                    <span>Add Gift Card</span>
                  </div>
                </div>
              </vx-card>
            </div>

            <!-- RIGHT COL: PRICE -->
            <div class="vx-col lg:w-1/3 w-full">
              <vx-card title="Price Details">
                <div class="flex justify-between mb-2">
                  <span>Price 3 Items</span>
                  <span class="font-semibold">$699.30</span>
                </div>
                <div class="flex justify-between mb-2">
                  <span>Delivery Charges</span>
                  <span class="text-success">Free</span>
                </div>

                <vs-divider />

                <div class="flex justify-between">
                  <span>Amount Payable</span>
                  <span class="font-semibold">$699.30</span>
                </div>
              </vx-card>
            </div>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
// const ItemListView = () => import('./components/ItemListView.vue')
import ItemListView from "../components/vista-curso/ItemListView.vue";

export default {
  data() {
    return {
      // TAB 2
      fullName: "",
      mobileNum: "",
      pincode: "",
      houseNum: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      addressType: 1,
      addressTypeOptions: [
        { text: "Home", value: 1 },
        { text: "Office", value: 2 }
      ],

      // TAB 3
      paymentMethod: "debit-card",
      cvv: ""
    };
  },
  computed: {
    cartItems: function() {
      return this.$store.state.eCommerce.cartItems.slice().reverse();
    },
    isInWishList: function() {
      return itemId => this.$store.getters["eCommerce/isInWishList"](itemId);
    },
    totalToPay: function() {
      let total = 0;

      this.cartItems.forEach(item => {
        total += item.quantity > 1 ? item.price * item.quantity : item.price;
      });

      return total;
    }
  },
  methods: {
    // TAB 1
    removeItemFromCart(item) {
      this.$store.dispatch("eCommerce/toggleItemInCart", item);
    },
    wishListButtonClicked(item) {
      // Toggle in Wish List
      if (this.isInWishList(item.id))
        this.$router.push("/lista-deseos").catch(() => {});
      else {
        this.toggleItemInWishList(item);
        // this.removeItemFromCart(item)
      }
    },
    toggleItemInWishList(item) {
      this.$store.dispatch("eCommerce/toggleItemInWishList", item);
    },
    updateItemQuantity(event, index) {
      const itemIndex = Math.abs(index + 1 - this.cartItems.length);
      this.$store.dispatch("eCommerce/updateItemQuantity", {
        quantity: event,
        index: itemIndex
      });
    },

    // TAB 2
    submitNewAddressForm() {
      return new Promise(() => {
        this.$validator.validateAll("add-new-address").then(result => {
          if (result) {
            // if form have no errors
            this.$refs.checkoutWizard.nextTab();
          } else {
            this.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    },

    // TAB 3
    makePayment() {
      return new Promise(() => {
        this.$validator.validateAll("cvv-form").then(result => {
          if (result) {
            // if form have no errors
            this.$vs.notify({
              title: "Success",
              text: "Payment received successfully",
              color: "success",
              iconPack: "feather",
              icon: "icon-check"
            });
          } else {
            this.$vs.notify({
              title: "Error",
              text: "Please enter valid details",
              color: "warning",
              iconPack: "feather",
              icon: "icon-alert-circle"
            });
          }
        });
      });
    }
  },
  components: {
    ItemListView,
    FormWizard,
    TabContent
  }
};
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
  }

  .item-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }

  .vue-form-wizard {
    padding-bottom: 0;

    ::v-deep .wizard-header {
      padding: 0;
    }

    ::v-deep .wizard-tab-content {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 0;

      .wizard-tab-container {
        margin-bottom: 0 !important;
      }
    }
  }

  .scroll-list-Itemcart {
    max-height: 600px;
    overflow-y: scroll;
  }
}
</style>
