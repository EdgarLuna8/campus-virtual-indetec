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
  change_selected({ commit }, selected) {
    commit('CHANGE_SELECTED', selected);
  },
}

export default actions
