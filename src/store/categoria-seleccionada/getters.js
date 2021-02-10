/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// added so later we can keep breakpoint in sync automatically using this config file
// import tailwindConfig from "../../tailwind.config.js"

const getters = {
  // getNameObject: (state) => {
  //   return state.arreglo_chido.nombre
  // },
  getNameObject: function(state) {
    return state.arreglo_chido.nombre
  }
}

export default getters
