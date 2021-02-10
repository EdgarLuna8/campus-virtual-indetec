<template>
  <div>
    <Modal :active="activo" @closeModal="activo = false">
      <template slot="modal-header">
        <vs-divider position="left">
          <h1>Contacto</h1>
        </vs-divider>
      </template>

      <template slot="modal-body">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/1 md:w-1/1 lg:w-full xl:w-full pb-6">
            <div class="w-12/12 ml-3 mr-3">
              <div class="vx-row mb-6 mt-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Nombre</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-user"
                    icon-no-border
                    v-model="input5"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Correo</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input
                    type="email"
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-mail"
                    icon-no-border
                    v-model="input6"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Telefono</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-input
                    class="w-full"
                    icon-pack="feather"
                    icon="icon-phone"
                    icon-no-border
                    v-model="input7"
                  />
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Tema</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-select class="selectExample w-full" v-model="select1">
                    <vs-select-item
                      :is-selected.sync="item.isSelected"
                      :key="index"
                      :value="item.value"
                      :text="item.isSelected ? item.selectedText : item.label"
                      v-for="(item, index) in options1"
                    />
                  </vs-select>
                </div>
              </div>
              <div class="vx-row mb-6">
                <div class="vx-col sm:w-1/3 w-full">
                  <span>Mensaje</span>
                </div>
                <div class="vx-col sm:w-2/3 w-full">
                  <vs-textarea v-model="mensaje" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template slot="modal-footer">
        <vs-row>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-button class="mr-3 mb-2">Enviar</vs-button>
          </vs-col>
        </vs-row>
      </template>
    </Modal>

    <!-- <vs-popup
      style="color:rgb(0,0,0);"
      background-color="rgba(0,0,0,.6)"
      title
      :active.sync="activo"
    >
      <vs-divider position="left">
        <h1>Contacto</h1>
      </vs-divider>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/1 md:w-1/1 lg:w-full xl:w-full pb-6">
          <div class="w-12/12 ml-3 mr-3">
            <div class="vx-row mb-6 mt-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Nombre</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-user"
                  icon-no-border
                  v-model="input5"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Correo</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input
                  type="email"
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-mail"
                  icon-no-border
                  v-model="input6"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Telefono</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-input
                  class="w-full"
                  icon-pack="feather"
                  icon="icon-phone"
                  icon-no-border
                  v-model="input7"
                />
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Tema</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-select class="selectExample w-full" v-model="select1">
                  <vs-select-item
                    :is-selected.sync="item.isSelected"
                    :key="index"
                    :value="item.value"
                    :text="item.isSelected ? item.selectedText : item.label"
                    v-for="(item, index) in options1"
                  />
                </vs-select>
              </div>
            </div>
            <div class="vx-row mb-6">
              <div class="vx-col sm:w-1/3 w-full">
                <span>Mensaje</span>
              </div>
              <div class="vx-col sm:w-2/3 w-full">
                <vs-textarea v-model="mensaje" />
              </div>
            </div>

            <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <vs-button class="mr-3 mb-2">Enviar</vs-button>
              </vs-col>
            </vs-row>

          </div>
        </div>
      </div>
    </vs-popup>-->
  </div>
</template>

<script>
export default {
  components: {
    Modal: () => import("@/components/modal/modal.vue"),
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      email: "",
      mensaje: "",
      select1: 3,
      activo: false,
      options1: [
        {
          value: 1,
          label: "Primer ingreso",
          selectedText: "Primer ingreso",
          isSelected: false,
        },
        {
          value: 2,
          label: "Posgrados",
          selectedText: "Posgrados",
          isSelected: false,
        },
        {
          value: 3,
          label: "Sugerencia",
          selectedText: "Sugerencia",
          isSelected: false,
        },
      ],
    };
  },
  watch: {
    active: function (value) {
      this.activo = value;
    },
    activo: function (value) {
      // if (!value) this.$emit('closeContactoModal');

      this.$parent._data.activeContacto = value;
    },
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // if form have no errors

          alert("form submitted!");
        } else {
          // form have errors
        }
      });
    },
  },
};
</script>
