/*=========================================================================================
  Description: Store de ejemplo para aprender a usar Vuex
  Receive: ---
  Author: DanyCristhian
==========================================================================================*/

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

export default {
  namespaced: true,
  getters,
  mutations,
  state,
  actions
}
