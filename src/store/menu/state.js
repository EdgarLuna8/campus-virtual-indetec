/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const state = {
  navMenuItems: [
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
      submenu: [
        // {
        //   id: 1,
        //   nombre: "Especialidad en fiscalización de impuestos en México",
        //   division: 1,
        //   url: "/detalle-especialidad/1",
        //   slug: "oferta-academica"
        // },
        // {
        //   id: 2,
        //   nombre: "Especialidad en fiscalización de impuestos GDL",
        //   division: 1,
        //   url: "/detalle-especialidad/2",
        //   slug: "oferta-academica"
        // },
        // {
        //   url: '/detalle-especialidad/2',
        //   name: 'Maestría en Gestión Pública 2',
        //   slug: 'dashboard-analytics-2',
        // },
      ]
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
  ]
}

export default state
