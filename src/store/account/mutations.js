/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {
  SET_USERDATA(state, data) { 
    state.acc_grl = data.general; 
    state.sesion = data.session; 
    state.profesion = data.profesion; 
    state.dependencia = data.dependencia; 
  },
  CHANGE_PROFILE(state, value) { state.userRole = value; }
}

export default mutations

