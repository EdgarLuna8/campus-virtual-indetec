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
  get_Navbar: function (state, getters, rootState) {
    let especialidades = rootState.especialidades.especialidades;
    let menu = [
      {
        url: "/",
        name: "Inicio",
        icon: "HomeIcon"
      },
      {
        url: "/acerca-de",
        name: "Nosotros",
        icon: "InfoIcon"
      },
      {
        url: null,
        name: 'Oferta académica',
        icon: 'GridIcon',
        submenu: []
      },
      {
        url: "/ayuda",
        name: "Ayuda",
        icon: "HelpCircleIcon"
      },
      {
        url: "/contacto",
        modal: true,
        name: "Contacto",
        icon: "EditIcon"
      }
    ];

    especialidades.forEach(item => {
      item.url = "/detalle-especialidad/" + item.id;
      item.slug = "oferta-academica";
    });

    menu.forEach(item => {
      if (item.submenu) item.submenu = especialidades
    });

    return menu
  },
}

export default getters
