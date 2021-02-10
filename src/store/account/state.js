/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const state = {
  acc_grl: {
    id: 0,
    nombre: null,
    segundoNombre: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    genero: 'F',
    fechaNacimiento: null,
    rfc: null,
    curp: null,
    funcionarioActivo: null,
    email: null,
    emailAlt: null,
    telefono1: null,
    telefono2: null,
    extension: null,
  },
  sesion: {
    uid: null,
    persona: null,
    cuenta: null
  },
  dependencia: [],
  profesion: [],
  // PERMISOS - ROLES
  userRole: {},
  all_permisos: [],
  rolesDisponibles: []
}

export default state
