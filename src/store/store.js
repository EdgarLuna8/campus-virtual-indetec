/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleMenu from './menu/store.js'
import moduleAccount from './account/store.js';
import moduleCourses from './cursos/store.js';
import moduleEspecialidades from './especialidades/store.js';
// import moduleeCommerce from './eCommerce/store.js';
// import moduleCategoSelected from './categoria-seleccionada/store.js';
import moduleNotifications from './notificaciones/store.js';
// import moduleEmail from './email/moduleEmail.js';
import moduleAlumnos from './alumnos/store.js'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      menu: moduleMenu,
      account: moduleAccount,
      courses: moduleCourses,
      especialidades: moduleEspecialidades,
      // eCommerce: moduleeCommerce,
      // category_selected: moduleCategoSelected,
      notifications: moduleNotifications,
      // email: moduleEmail,
      alumnos: moduleAlumnos
    },
    strict: process.env.NODE_ENV !== 'production',
    plugins: [createPersistedState({ key: 'Store' })]
})
