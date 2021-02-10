/*=========================================================================================
  File Name: getters.js
  Description: Vuex Store - getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

const getters = {
  getCourseList: state => search => {    
    search = search.toLowerCase();
    if (search.length == 0) return state.cursos
    else return state.cursos.filter((item) => item.name.toLowerCase().match(search, 'gi'));
  },
  get_myCourseList: state => search => {    
    search = search.toLowerCase();
    if (search.length == 0) return state.mis_cursos
    else return state.mis_cursos.filter((item) => item.nombre.toLowerCase().match(search, 'gi'));
  },
  get_EspecialidadByID: state => id => {
    if (isNaN(id)) return [];
    else return state.cursos.filter((item) => item.id == id)[0];
  },
  // getCartItem: state => itemId => {
  //   const result = state.cartItems.filter((item) => item.id === itemId)
  //   return result.length ? result.pop() : []
  // }  
}

export default getters
