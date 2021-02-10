/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent

  HERE YOU CAN MAKE WS CALLS
==========================================================================================*/

const actions = {
  set_userData({ commit }, data) {
    commit('SET_USERDATA', data);
  },
  cambiar_perfil({ commit }, selected) {
    commit('CHANGE_PROFILE', selected);
  },
}

export default actions
