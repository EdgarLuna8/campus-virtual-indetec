<template>
  <div class="vx-row container">
    <!-- MULTIPLE COLUMNS-->
    <div class="vx-col md:w-full lg:w-2/3 mb-base mr-auto ml-auto">
      <vx-card
        title="Información de contacto"
        :subtitle="formulario.especialidad.nombre"
      >
        <!-- NOMBRE Y SEGUNDO NOMBRE -->
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full"
              icon-pack="feather"
              icon="icon-user"
              label-placeholder="Primer nombre"
              v-model="formulario.nombre"
              v-validate="'required|alpha_spaces|min:3'"
              name="nombre"
            />
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('nombre') ? getError_message('nombre').msg : ''
              "
            ></span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full"
              label-placeholder="Segundo nombre"
              v-model="formulario.segundoNombre"
            />
          </div>
        </div>
        <!-- APELLIDOS -->
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full"
              label-placeholder="Apellido paterno"
              v-model="formulario.apellidoP"
              name="apellido_p"
              v-validate="'required|alpha_spaces'"
            />
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('apellido_p')
                  ? getError_message('apellido_p').msg
                  : ''
              "
            ></span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full"
              label-placeholder="Apellido materno"
              v-model="formulario.apellidoM"
            />
          </div>
        </div>
        <!-- TELÉFONO Y CORREO -->
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              icon-pack="feather"
              icon="icon-mail"
              class="w-full"
              label-placeholder="Correo electrónico"
              v-model="formulario.email"
              name="email"
              v-validate="'required|email'"
            />
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('email') ? getError_message('email').msg : ''
              "
            ></span>
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              icon-pack="feather"
              icon="icon-phone"
              class="w-full"
              label-placeholder="Teléfono"
              v-model="formulario.telefono"
              name="telefono"
              v-validate="'required|numeric|min:10'"
            />
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('telefono')
                  ? getError_message('telefono').msg
                  : ''
              "
            ></span>
          </div>
        </div>

        <div class="mt-6 mb-5">
          <h4>Información de dependencia</h4>
        </div>
        <div class="vx-row">
          <!-- DEPENDENCIA -->
          <div class="vx-col w-full mb-2">
            <v-select
              label="rfc"
              :filterable="false"
              :options="dependencias"
              @search="onSearch"
              placeholder="Seleccione dependencia"
              v-model="dependencia_selected"
              name="select_rfc"
              v-validate="'required'"
            >
              <!-- CUANDO NO HAY OPCIONES -->
              <template slot="no-options">
                Ingrese el <b>RFC</b> de su dependencia y seleccionela
              </template>
              <!-- COMO SE VEN LAS OPCIONES -->
              <template slot="option" slot-scope="dep">
                <div class="d-center" :name="dep.rfc">
                  <b>{{ dep.rfc }}</b> - {{ dep.dependencia }}
                </div>
              </template>
              <!-- COMO SE VE LA OPCIÓN SELECCIONADA -->
              <template slot="selected-option" slot-scope="dep">
                <div class="selected d-center" :name="dep.rfc">
                  <b class="text-primary">{{ dep.rfc }}</b> -
                  {{ dep.dependencia }}
                </div>
              </template>
            </v-select>
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('select_rfc')
                  ? getError_message('select_rfc').msg
                  : ''
              "
            ></span>
          </div>

          <!-- ENTIDAD FEDERATIVA -->
          <div class="vx-col w-full mb-2">
            <v-select
              disabled
              placeholder="Seleccione entidad federativa"
              label="nombre"
              :options="entidades_fed"
              style="margin-top: 17px"
              v-model="entidadFederativa_selected"
              name="select_ef"
              v-validate="'required'"
            />
            <span
              class="text-danger text-sm"
              v-html="
                getError_message('select_ef')
                  ? getError_message('select_ef').msg
                  : ''
              "
            ></span>
            <small style="display: block"
              >La entidad federativa es cargada de manera
              <b class="text-primary">automática</b> al seleccionar su
              dependencia, asegúrece que sea la correcta, de lo contrario,
              <b class="text-primary">comuníquese con nosotros</b>.</small
            >
          </div>
        </div>

        <div class="vx-row mt-6">
          <div class="vx-col w-full text-center">
            <vs-button class="mr-3 mb-2" @click="validateForm"
              >Enviar formulario</vs-button
            >
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { get_tbl_nla, post_data } from "@/http/formulario-admision";
import { get_data } from "@/http/oferta-academica";
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";

// For custom error message
import { Validator } from "vee-validate";
// Listado de errores
const dict = {
  custom: {
    nombre: {
      required: "El nombre es <b>obligatorio</b>",
      alpha_spaces: "El nombre debe contener sólo <b>letras</b>",
      min: "Debe ingresar un nombre mínimo con <b>3 letras</b>",
    },
    apellido_p: {
      required: "El apellido paterno es <b>obligatorio</b>",
      alpha_spaces: "El apellido paterno debe contener sólo <b>letras</b>",
    },
    telefono: {
      required: "El teléfono es <b>obligatorio</b>",
      numeric: "El teléfono debe contener sólo <b>números</b>",
      min: "Debe ingresar un teléfono mínimo de <b>10 dígitos</b>",
    },
    email: {
      required: "El correo electrónico es <b>obligatorio</b>",
      email: "El correo electrónico <b>no es válido</b>",
    },
    select_rfc: {
      required: "Debe <b>seleccionar</b> una opción",
    },
    select_ef: {
      required: "Debe <b>seleccionar</b> una opción",
    },
  },
};

// register custom messages
Validator.localize("es", dict);

var interval; // INTERVALO PARA HACER REDIRECT DESPUÉS DE 45MIN SIN HACER SUBMIT

/**
* Formulario de pre-registro a especialidad
* @displayName Pre-registro
* @example [none]
*/
export default {
  data() {
    return {
      counter: 1,
      message_error_input: [],

      formulario: {
        especialidad: "",
        nombre: "",
        segundoNombre: "",
        apellidoP: "",
        apellidoM: "",
        telefono: "",
        email: "",
        entidadFederativa: "",
        dependencia: "",
      },
      entidades_fed: [],
      dependencias: [],
      entidadFederativa_selected: "",
      dependencia_selected: "",
      tbl: "",
      old_tbl: "",
      nla: ""
    };
  },
  computed: {
    dataEspecialidad: function () {
      return (id_especialidad) =>
        this.$store.getters["especialidades/get_EspecialidadByID"](
          id_especialidad
        );
    },
    getError_message: function () {
      return (nombre_item) =>
        this.message_error_input.find((item) => item.field == nombre_item);
    },
  },
  created: function () {
    this.formulario.especialidad = this.dataEspecialidad(this.$route.params.id);
    this.get_entidades(); // GET ENTIDADES FEDERATIVAS LIST
    this.promise_tbl_nla(); // MAKE PROMISE TO TBL REQUEST
  },
  watch: {
    dependencia_selected: function (value) {
      if (value != "" && value != null) {
        this.entidadFederativa_selected = value.entidadFederativa;
        let dep_tmp = {
          id: value.id_dependencia,
          nombre: value.dependencia,
          rfc: value.rfc,
        };
        this.formulario.dependencia = dep_tmp;
      }
    },
    entidadFederativa_selected: function (value) {
      if (value != "" && value != null)
        this.formulario.entidadFederativa = value;
    },
  },
  methods: {
    /**
     * Éste método verifica la cantidad de intentos, si es menor o igual a 10, realiza petición para almacenar datos, si es mayor a 10, muestra mensaje de 'exceso de intentos'
     * @public
     */
    submitForm: function () {
      if (this.counter <= 10) {
        this.$vs.loading();
        var params = new FormData();
        params.append("task", "wspublico");
        params.append("origin", process.env.VUE_APP_ORIGIN_API);
        params.append("action", 4);
        params.append("tbl", this.tbl);
        params.append("nla", this.nla);
        params.append("data", JSON.stringify(this.formulario));

        post_data(params)
          .then((response) => {
            if (response.status == 200 && response.data.status == 200) {
              this.registroExitoso();
            } else {
              this.$vs.notify({
                color: "danger",
                position: "top-right",
                time: 5000,
                title: "Error al generar pre-registro",
                text: response.data.message,
              });
              
              this.tbl = response.data.tbl;
            }
            
            this.$vs.loading.close();
          })
          .catch((err) => {
            this.promise_tbl_nla(); // MAKE PROMISE TO TBL REQUEST
            this.$vs.loading.close();
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error",
              text: err,
            });
          });

        this.counter += 1;
      } else {
        this.$vs.notify({
          color: "danger",
          position: "top-right",
          title: "Exceso de intentos",
          text:
            "La página ha expirado, por favor, intente nuevamente más tarde",
        });
      }
    },
    /**
     * Obtener tbl & nla
     * @param {function} resolve - Promise resolve
     * @param {function} reject - Promise reject
     * @public
     */
    get_tbl_nla: function (resolve, reject) {
      get_tbl_nla()
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.tbl = response.data.data.tbl;
            this.nla = response.data.data.nla;
            resolve();
          } else reject(response.data.message);
        })
        .catch((err) => {
          reject(err);
        });
    },
    /**
     * Listado de entidades federativas
     * @public
     */
    get_entidades: function () {
      get_data({ action: 2 })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.entidades_fed = response.data.data;
          } else {
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title: "Error al cargar entidades federativas",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Método para validación de datos
     * @public
     */
    validateForm() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.submitForm();
        } else {
          this.message_error_input = this.$validator.errors.items;
        }
      });
    },
    /**
     * Método para la búsqueda de dependencia a través del RFC de la misma
     * @param {string} search - Cadena de texto ingresado (RFC)
     * @param {function} loading - Función para mostrar loader a la derecha del buscador
     * @public
     */
    onSearch(search, loading) {
      if (search.length == 0) return false; // SEARCH IT'S EMPTY

      loading(true);
      get_data({ action: 3, rfc: search })
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) {
            this.dependencias = response.data.data;
          } else {
            this.dependencias = [];
            this.$vs.notify({
              color: "danger",
              position: "top-right",
              title:
                response.data.status +
                " - Error al obtener datos de dependencia",
              text: response.data.message,
            });
          }

          loading(false);
        })
        .catch((err) => {
          loading(false);
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    /**
     * Éste metodo es llamado para realizar un setInterval de 45min, el cual compara banderas de tbl para saber si realizó una petición en este periodo de tiempo, de lo contrario redirecciona a pantalla principal y muestra mensaje de 'formulario caducado'
     * @public
     */
    intervalRedirect: function () {
      interval = setInterval(() => {
        if (this.tbl == this.old_tbl) {
          this.$router.push("/detalle-especialidad/" + this.$route.params.id);
          this.$vs.notify({
            time: 10000,
            color: "warning",
            position: "top-right",
            title: "Formulario caducado",
            text:
              "El formulario de pre-registro ha expirado, ingrese nuevamente",
          });
        }
        this.old_tbl = this.tbl;
      }, 2700000);
    },
    /**
     * Muestra el mensaje de éxito al pre-registrarse a una especialidad, así como un mensaje de correo envíado
     * @public
     */
    registroExitoso: function () {
      // NOTIFY SUCCESS REGISTER
      this.$vs.notify({
        title: "Correo de verificación enviado",
        text:
          "Hemos enviado un correo de verificación a su cuenta de correo electrónico, siga los pasos mencionados en el mismo para continuar con el proceso de inscripción.",
        time: 20000,
        position: "top-right",
        color: "primary",
        iconPack: "feather",
        icon: "icon-mail",
      });
      // NOTIFY MAIL SENT
      this.$vs.notify({
        title: "Registro exitoso",
        text: "Se ha registrado exitosamente",
        time: 20000,
        position: "top-right",
        color: "primary",
        iconPack: "feather",
        icon: "icon-check",
      });
      this.clearForm();
    },
    /**
     * Método encargado de realizar petición para cargar el tbl y nal, éste método maneja una promesa, al terminar la promesa, se hace el llamado a intervalRedirect(), e iguala el valor de banderas de tbl
     * @public
     */
    promise_tbl_nla: function () {
      const vm = this;

      let promesa = new Promise((resolve, reject) => {
        this.get_tbl_nla(resolve, reject);
      });

      promesa
        .then(() => {
          vm.old_tbl = vm.tbl;
          vm.intervalRedirect();
        })
        .catch(function (error) {
          vm.$vs.notify({
            title: "Error obteniendo tbl/nla",
            text: error + " Por favor inténtelo más tarde.",
            icon: "cancel",
            position: "top-right",
            color: "danger",
            time: 15000,
          });
        });
    },
    /**
     * Limpia el formulario
     * @public
     */
    clearForm: function () {
      this.formulario = {
        especialidad: "",
        nombre: "",
        segundoNombre: "",
        apellidoP: "",
        apellidoM: "",
        telefono: "",
        email: "",
        entidadFederativa: "",
        dependencia: "",
      };
      this.entidadFederativa_selected = "";
      this.dependencia_selected = "";
    },
  },
  destroyed: function () {
    clearInterval(interval);
  },
  components: {
    "v-select": vSelect,
    FormWizard,
    TabContent,
  },
};
</script>
