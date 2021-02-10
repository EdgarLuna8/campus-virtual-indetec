/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const getters = {
  get_Token: function (state) {
    return state.token;
  },
  get_Nombre: function (state) {
    const nombre = state.acc_grl.nombre + ' ' + state.acc_grl.segundoNombre + ' ' + state.acc_grl.apellidoPaterno + ' ' + state.acc_grl.apellidoMaterno;
    return nombre;
  },
  get_imagenUsuario(state) {
    const gender = state.acc_grl.genero;
    if (gender != '') return require("@/assets/images/profile/user" + gender + ".png");
    else return "";
  },
  get_Rol: function (state) {
    return state.userRole;
  },
  getAccount: function(state){    
    return state.acc_grl;
  },
  getDependencias: function(state){
    return state.dependencia;
  },
  getProfesiones: function(state){
    return state.profesion;
  }
}

export default getters
