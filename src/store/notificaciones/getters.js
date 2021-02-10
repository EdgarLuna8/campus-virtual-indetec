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
  getNotifications: state => cantidad => {    
    let letsReturn = [];

    if (typeof cantidad === 'number' && cantidad > 0 && cantidad <= state.notificaciones.length) {      
      for (let i = 0; i < cantidad; i++) {
        letsReturn.push(state.notificaciones[i]);
      }
    } else {
      letsReturn = state.notificaciones
    }
        
    return letsReturn;
  },
  getUnreadNotifications: function(state) {
    return state.sinleer_notificaciones
  },
}

export default getters
