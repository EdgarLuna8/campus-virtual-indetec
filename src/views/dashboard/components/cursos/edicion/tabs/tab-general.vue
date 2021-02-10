<template>
  <div>
    <vx-card>
      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="flex items-end px-3">
            <span class="font-medium text-lg leading-none">Datos generales</span>
          </div>
          <vs-divider />
        </div>
      </div>

      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <vs-input
            label="Nombre de evento"
            class="w-full"
            :danger="evento.nombre == ''"
            danger-text="Es necesario capturar un nombre"
            placeholder="Nombre de evento"
            val-icon-danger="icon-x"
            val-icon-pack="feather"
            v-model="evento.nombre"
          />
        </div>

        <vs-input-number min="0" v-model="evento.precio" label="Precio: " class="mt-5" />
        <vs-input-number min="0" v-model="evento.capacidad" label="Capacidad: " class="mt-5" />

        <div class="vx-col w-full mt-8">
          <vs-textarea
            label="Descripción de evento"
            :danger="evento.descripcion == ''"
            danger-text="Es necesario capturar un nombre"
            placeholder="Nombre de evento"
            val-icon-danger="icon-x"
            val-icon-pack="feather"
            v-model="evento.descripcion"
          />
        </div>

        <div class="flex flex-wrap items-center mb-base mt-8">
          <img :src="evento.imagen" class="mr-4 mb-4" :width="isSmallerScreen ? '100%' : '50%'" />
          <div>
            <vs-button
              @click="activeModalCambiaImg = true"
              class="mr-4 sm:mb-0 mb-2"
            >Actualizar imagen</vs-button>
            <!-- <vs-button @click="testHttp_method" class="mr-4 sm:mb-0 mb-2">testHttp</vs-button> -->
            <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>
          </div>
        </div>
      </div>

      <!-- Save & Reset Button -->
      <div class="flex flex-wrap items-center justify-end">
        <vs-button class="ml-auto mt-2">Save Changes</vs-button>
        <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
      </div>
    </vx-card>

    <!-- MODAL PARA CARGAR IMAGEN DE EVENTO -->
    <Modal
      :configuracion="{ title: 'Cambiar imagen de evento' }"
      :active="activeModalCambiaImg"
      @closeModal="activeModalCambiaImg = false"
    >
      <template slot="modal-body">
        <vs-tabs alignment="fixed">
          <vs-tab label="Seleccionar de mi equipo">
            <!-- <form role="form" class="form" onsubmit="return false;">
              <div class="form-group">
                <label for="file">File</label>
                <input id="file" type="file" class="form-control" />
              </div>
              <button @click="cargar" id="upload" type="button" class="btn btn-primary">Upload</button>
            </form>
            <div id="output" class="container"></div>
            <vs-progress :percent="progress_example" color="primary"></vs-progress> -->

            <div class="flex">
              <div class="flex-1"></div>
              <div class="flex-1">
                <vs-upload
                  text="Cargar imagen"
                  action="https://jsonplaceholder.typicode.com/posts/"
                />
              </div>
              <div class="flex-1"></div>
            </div>
          </vs-tab>
          <vs-tab label="Vía URL">
            <div class="vx-col w-full mt-5">
              <vs-input
                :danger="evento.imagen == ''"
                class="w-full"
                danger-text="Ingrese la URL de la imagen"
                placeholder="URL de imagen"
                val-icon-danger="icon-x"
                val-icon-pack="feather"
                v-model="evento.imagen"
              />
            </div>

            <div class="flex mt-3">
              <div class="w-1/5"></div>
              <div class="w-3/5">
                <img :src="evento.imagen" class="mt-4" width="100%" />
              </div>
              <div class="w-1/5"></div>
            </div>
          </vs-tab>
        </vs-tabs>
      </template>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
// import { testHttp } from "@/http/prueba";

export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    isSmallerScreen: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Modal: () => import("@/components/modal/modal.vue"),
  },
  data() {
    return {
      activeModalCambiaImg: false,
      evento: {
        nombre: "",
        descripcion: "",
        precio: "",
        fecha: "",
        imagen: "",
        capacidad: "",
      },
      progress_example: 0,
    };
  },
  created() {
    console.log("Created edición general tab", this.id);
    if (this.id) {
      this.evento.nombre = this.get_EspecialidadByID(this.id).name;
      this.evento.descripcion = this.get_EspecialidadByID(this.id).description;
      this.evento.precio = this.get_EspecialidadByID(this.id).price;
      this.evento.fecha = this.get_EspecialidadByID(this.id).date;
      this.evento.imagen = this.get_EspecialidadByID(this.id).image;
      this.evento.capacidad = 0;   
    }
  },
  methods: {
    testHttp_method: function () {
      console.log('Deprecated');
      // testHttp({ action: 1, permiso: 1 }).then((response) => {
      //   console.log(response);
      // });
    },
    cargar: function () {
      const vm = this;
      var output = document.getElementById("output");
      var data = new FormData();
      data.append("foo", "bar");
      data.append("file", document.getElementById("file").files[0]);

      var config = {
        onUploadProgress: function (progressEvent) {
          let progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          //   console.log('Porcentaje de subida: ', progress, '%');
          vm.progress_example = progress;
          console.log("Porcentaje de subida: ", vm.progress_example, "%");
        },
      };

      axios
        .put("https://jsonplaceholder.typicode.com/posts/", data, config)
        .then(function (res) {
          output.className = "container";
          output.innerHTML = res.data;
        })
        .catch(function (err) {
          output.className = "container text-danger";
          output.innerHTML = err.message;
        });
    },
  },
  computed: {
    get_EspecialidadByID: function () {
      return (id) => this.$store.getters["courses/get_EspecialidadByID"](id);
    },
  },
};
</script>
