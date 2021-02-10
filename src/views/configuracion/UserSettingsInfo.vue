<template>
  <vx-card no-shadow>
    
    <!-- DOB -->
    <div class="mt-8">
      <label class="text-sm">Cumpleaños</label>
      <flat-pickr v-model="getAccount.fechaNacimiento" :config="{ dateFormat: 'd F Y' }" class="w-full" />
    </div>    
    <div class="mt-8">
      <label class="text-sm">Dependencias</label>
      <v-select v-model="sdepencia" placeholder="seleccione" label="nombre" :options="getDependencias" :dir="$vs.rtl ? 'rtl' : 'ltr'" >
        <!-- CUANDO NO HAY OPCIONES -->
        <template slot="no-options">
          Sin coincidencias
        </template>
        <!-- COMO SE VEN LAS OPCIONES -->
        <template slot="option" slot-scope="dep">
          <div class="d-center" :name="dep.rfc">
            <b>{{ dep.rfc }}</b> - {{ dep.nombre }}
          </div>
        </template>
        <template slot="selected-option" slot-scope="dep">
          <div class="selected d-center" :name="dep.rfc">
            <b class="text-primary">{{ dep.rfc }}</b> -
            {{ dep.nombre }}
          </div>
        </template>
      </v-select>  
    </div>
    <div class="mt-8">
      <label class="text-sm">Profesiones</label>
      <v-select v-model="sprofesion" placeholder="seleccione" label="puesto" :options="getProfesiones" :dir="$vs.rtl ? 'rtl' : 'ltr'" >
        <template slot="no-options">
          Sin coincidencias
        </template>
        <!-- COMO SE VEN LAS OPCIONES -->
        <template slot="option" slot-scope="pro">
          <div class="d-center" :name="pro.id_profesion">
            <b>{{ pro.titulo }}</b> | {{ pro.puesto }} - {{ pro.departamento }}
          </div>
        </template>
        <template slot="selected-option" slot-scope="pro">
          <div class="selected d-center" :name="pro.id_profesion">
            <b class="text-primary">{{ pro.titulo }}</b> |
            {{ pro.puesto }} - {{ pro.departamento }}
          </div>
        </template>
      </v-select>  
    </div>   

    <!-- Mobile Number --> 
    <div class="flex mt-8">
      <vs-input class="w-1/2 pr-2" type="number" label-placeholder="Telefono Adicional" v-model="acc_grl.telefono2" />
      <vs-input class="w-1/2 pl-2" label-placeholder="Email Alternativo" v-model="acc_grl.emailAlt"></vs-input>
    </div>    
    <div class="flex mt-8">
      <vs-input class="w-1/2 pr-2" label-placeholder="RFC" v-model="acc_grl.rfc"></vs-input>
      <vs-input class="w-1/2 pl-2" label-placeholder="CURP" v-model="acc_grl.curp"></vs-input>
    </div>
    
    <!-- Website  -->
    <vs-input class="w-full mt-8" label-placeholder="Extensión" v-model="acc_grl.extension" />

    <!-- Gender -->
    <div class="mt-8 mb-base">
      <label class="text-sm">Genero</label>
      <div class="mt-2">
        <vs-radio v-model="acc_grl.genero" vs-value="M" class="mr-4">Masculino</vs-radio>
        <vs-radio v-model="acc_grl.genero" vs-value="F" class="mr-4">Femenino</vs-radio>        
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="upd_data()">Guardar Cambios</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reiniciar</vs-button>
    </div>
  </vx-card>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'
import { get_data, post_data } from "@/http/cuenta";

export default {
  components: {
    flatPickr,
    vSelect
  },
  data () {
    return {
      acc_grl:{
        "id":0,
        "nombre":"",
        "segundoNombre":""
        ,"apellidoPaterno":"",
        "apellidoMaterno":"",
        "genero":"",        
        "rfc":"",
        "curp":"",
        "funcionarioActivo":"",
        "email":"",
        "emailAlt":"",
        "telefono1":"",
        "telefono2":"",
        "extension":""
      },
      dependencias: [],
      profesiones: [],      
      documentacion: [],
      bio: 'Hola Mundo',
      dob: null,
      country: 'Jalisco',
      sdepencia: '',
      sprofesion: '',
      lang_known: ['Español', 'Ingles','Aleman','Frances'],
      gender: 'male',
      mobile: '',
      website: '',

      // Options
      countryOptions: [
        { label: 'Jalisco',  value: 'jalisco'  },
        { label: 'Aguascalientes',     value: 'france'     },
        { label: 'Campeche',    value: 'germany'    },
        { label: 'Chiapas',      value: 'india'      },
        { label: 'Colima',     value: 'jordan'     },
        { label: 'Hidalgo',    value: 'morocco'    },
        { label: 'Mexico', value: 'portuguese' },
        { label: 'Durango',      value: 'syria'      },
        { label: 'Nayarit',        value: 'nayarit'        }
      ],
      langOptions: [
        { label: 'Ingles',  value: 'ingles'  },
        { label: 'Español',  value: 'español'  },
        { label: 'Frances',   value: 'frances'   },
        { label: 'Russian',  value: 'russian'  },
        { label: 'Aleman',   value: 'aleman'   },
        { label: 'Arabic',   value: 'arabic'   },
        { label: 'Sanskrit', value: 'sanskrit' }
      ]
    }
  },
  created: function () {
    this.setStorage()
  },
  computed: {
    getDependencias () {
      return this.$store.getters["account/getDependencias"];
    },
    getProfesiones () {
      return this.$store.getters["account/getProfesiones"];
    },
    getAccount(){
      return this.$store.getters["account/getAccount"];
    },
  },
  methods:{
    setStorage: function(){
      this.acc_grl.id = this.getAccount.id
      this.acc_grl.nombre = this.getAccount.nombre
      this.acc_grl.segundoNombre = this.getAccount.segundoNombre
      this.acc_grl.apellidoPaterno = this.getAccount.apellidoPaterno
      this.acc_grl.apellidoMaterno = this.getAccount.apellidoMaterno
      this.acc_grl.genero = this.getAccount.genero
      // this.acc_grl.fechaNacimiento = this.getAccount.fechaNacimiento
      this.acc_grl.rfc = this.getAccount.rfc
      this.acc_grl.curp = this.getAccount.curp
      this.acc_grl.funcionarioActivo = this.getAccount.funcionarioActivo
      this.acc_grl.email = this.getAccount.email
      this.acc_grl.emailAlt = this.getAccount.emailAlt
      this.acc_grl.telefono1 = this.getAccount.telefono1
      this.acc_grl.telefono2 = this.getAccount.telefono2
      this.acc_grl.extension = this.getAccount.extension
    },
    getInfo: function (resolve, reject) {
      let vm = this
      get_data()
        .then((response) => {
          if (response.status == 200 && response.data.status == 200) { 
            let datos = {};
            datos.general = response.data.data;
            datos.general.id = response.data.session.persona;
            datos.session = response.data.session;
            datos.profesion = response.data.profesion;
            datos.dependencia = response.data.dependencia;           
            this.$store.dispatch("account/set_userData",datos);            
            resolve();
          } else {
            reject();
            vm.$vs.notify({
              color: "danger",
              position: "top-right",
              title: response.data.status + " - Error obteniendo datos",
              text: response.data.message,
            });
          }
        })
        .catch((err) => {
          reject();          
          vm.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error obteniendo tbl",
            text: err,
          });
        });
    },
    upd_data: function (){
      let vm = this
      var params = new FormData();
      params.append("wsperfil", "");
      params.append("origin", process.env.VUE_APP_ORIGIN_API);
      params.append("action", 1);
      params.append("token", this.$store.state.token);
      params.append("datos", JSON.stringify(this.acc_grl));      

      post_data(params)
        .then((response) => {          
          vm.$vs.notify({
            title: "Petición Finalizada",
            text: response.data.message,
            iconPack: "feather",
            icon:"icon-check",
            position: "top-right",
            color: "success",
            time: 8000,
          });
          vm.refreshInfo()
        }).catch((err) => {          
          vm.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
    refreshInfo(){
      let vm = this
      let promesa = new Promise((resolve, reject) => {
        this.getInfo(resolve, reject);
      });
      promesa.then(() => {
        vm.setStorage();      
      })
      .catch(function (error) {
        console.log(error)
        vm.$vs.notify({
          title: "Tiempo expirado",
          text: error,
          icon: "cancel",
          position: "top-right",
          color: "primary",
          time: 8000,
        });
      });
    }
  }
}
</script>
