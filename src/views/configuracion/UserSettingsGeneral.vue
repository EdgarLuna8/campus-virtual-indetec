<template>
  <vx-card no-shadow>
    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="getAvatar" size="70px" class="mr-4 mb-4" />
      <div>
        <p class="text-md mt-2">Hola de Nuevo!</p>
        <!-- <vs-button class="mr-4 sm:mb-0 mb-2">Subir Foto</vs-button> -->
        <!-- <vs-button type="border" color="danger">Remover</vs-button> -->
        <!-- <p class="text-sm mt-2">Solo JPG, GIF or PNG. Max size of 800kB</p> -->
      </div>
    </div>

    <!-- Info -->    
    <div class="flex mb-2">
      <div class="w-1/2 sm:w-1/1 sm:w-full px-2">
        <vs-input class="w-full mb-base" label-placeholder="Nombre" v-model="acc_grl.nombre"></vs-input>        
      </div>
      <div class="w-1/2 sm:w-1/1 sm:w-full h-12">
        <vs-input class="w-full mb-base" label-placeholder="Segundo Nombre" v-model="acc_grl.segundoNombre"></vs-input>        
      </div>
    </div> 
    <div class="flex mb-4">
      <div class="w-1/2 px-2">
        <vs-input class="w-full" label-placeholder="Primer Apellido" v-model="acc_grl.apellidoPaterno"></vs-input>
      </div>
      <div class="w-1/2 h-12">
        <vs-input class="w-full" label-placeholder="Segundo Apellido" v-model="acc_grl.apellidoMaterno"></vs-input>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="w-1/2 px-2">
        <vs-input class="w-full" label-placeholder="Email" v-model="acc_grl.email"></vs-input>
      </div>
      <div class="w-1/2 h-12">
        <vs-alert icon-pack="feather" icon="icon-info" class="h-full my-4" color="warning">
          <span>Cuenta no Verificada. <a href="#" class="hover:underline">Reenviar Confirmación</a></span>
        </vs-alert>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 h-12">
        <vs-input class="w-full" label-placeholder="Telefono" v-model="acc_grl.telefono1"></vs-input>
      </div>      
    </div> 
    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="upd_data()">Guardar Cambios</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning"  @click="refreshInfo()">Refrescar</vs-button>
    </div>
  </vx-card>
</template>

<script>
import { get_data, post_data } from "@/http/cuenta";

export default {
  data () {
    return {
      mood:0,
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
      }
      
    }
  },
  created: function () {
    this.setStorage()
  },
  computed: {    
    getAccount: function() {      
        return this.$store.getters["account/getAccount"];            
    },
    getAvatar(){
      return this.$store.getters["account/get_imagenUsuario"];
    }
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
