/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  getUserList: state => search => {    
    search = search.toLowerCase();
    if (search.length == 0) return state.cursos
    else return state.cursos.filter((item) => item.name.toLowerCase().match(search, 'gi'));
  },
  // get_myUserList: state => search => {    
  //   search = search.toLowerCase();
  //   if (search.length == 0) return state.mis_cursos
  //   else return state.mis_cursos.filter((item) => item.nombre.toLowerCase().match(search, 'gi'));
  // },
  get_UserByID: state => id => {
    if (isNaN(id)) return [];
    else return state.alumnos.filter((item) => item.id == id)[0];
  },
}
