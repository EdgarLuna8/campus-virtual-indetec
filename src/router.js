/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';


import { getUserData } from "@/http/user-data";

Vue.use(Router);

const rutas = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/acerca-de',
    name: 'Acerca de',
    component: () => import('./views/nosotros/acerca-de.vue')
  },
  {
    path: '/detalle-especialidad/:id',
    name: 'Detalles de curso',
    component: () => import('./views/detalles-curso/DetallesCurso.vue')
  },
  {
    path: '/ayuda',
    name: 'Soporte',
    component: () => import('@/views/soporte/KnowledgeBase.vue'),
  },
  // {
  //   path: '/contacto',
  //   name: 'Contacto',
  //   component: () => import('@/views/contacto/contacto.vue'),
  // },
  {
    path: '/mis-cursos',
    name: 'Mis cursos',
    component: () => import('@/views/mis-cursos/mis-cursos.vue')
  },


  // {
  //   path: '/lista-deseos',
  //   name: 'Lista de deseos',
  //   component: () => import('./views/lista-deseos/WishList.vue')
  // },
  // {
  //   path: '/carrito-compras',
  //   name: 'Carrito de compras',
  //   component: () => import('./views/carrito-compras/CarritoCompras.vue')
  // },
  {
    path: '/notificaciones',
    name: 'Notificaciones de usuario',
    component: () => import('./views/notificaciones/Notificaciones.vue')
  },
  {
    path: '/configuracion/',
    name: 'Configuración de usuario',
    component: () => import('@/views/configuracion/UserSettings.vue'),
  },
  {
    path: '/dashboard',
    name: 'Panel de administración',
    component: () => import('@/views/dashboard/dashboard.vue')
  },
  {
    path: '/edicion-evento/:id',
    name: 'Edición de evento',
    component: () => import('@/views/dashboard/components/cursos/edicion/edicion-cursos.vue'),
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Administración', url: '/dashboard' },
        { title: 'Edición de evento', active: true }
      ],
      pageTitle: 'Edición de evento',
      // dropdown: [
      //   { opcion: 'Recargar', icon: 'RepeatIcon', url: '' },
      //   { opcion: 'Nuevo evento', icon: 'PlusIcon', url: '' }
      // ]
    }
  },
  {
    path: '/registro/solicitud-admision/:id/:time',
    name: 'Solicitud de admisión',
    component: () => import('@/views/formulario-admision/Formulario.vue'),
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
      ],
      pageTitle: 'Solicitud de admisión',
      // dropdown: [
      //   { opcion: 'Recargar', icon: 'RepeatIcon', url: '' },
      //   { opcion: 'Nuevo evento', icon: 'PlusIcon', url: '' }
      // ]
    }
  },
  {
    path: '/registro/pre-registro/:id',
    name: 'Formulario de pre registro',
    component: () => import('@/views/formulario-admision/Pre-registro.vue'),
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Oferta académica' },
        { title: 'Pre registro', active: true }
      ],
      pageTitle: 'Formulario de pre registro',
      // dropdown: [
      //   { opcion: 'Recargar', icon: 'RepeatIcon', url: '' },
      //   { opcion: 'Nuevo evento', icon: 'PlusIcon', url: '' }
      // ]
    }
  },
  {
    path: '/edicion-usuario/:id',
    name: 'Edición de usuario',
    component: () => import('@/views/dashboard/components/alumnos/edicion/edicion-alumnos.vue'),
    // props: { default: true },
    meta: {
      breadcrumb: [
        { title: 'Home', url: '/' },
        { title: 'Administración', url: '/dashboard' },
        { title: 'Edición de usuario', active: true }
      ],
      pageTitle: 'Edición de usuario',
      // dropdown: [
      //   { opcion: 'Recargar', icon: 'RepeatIcon', url: '' },
      //   { opcion: 'Nuevo evento', icon: 'PlusIcon', url: '' }
      // ]
    }
  },
  {
    path: '/apps/email',
    redirect: '/apps/email/inbox',
    name: 'email'
  },
  {
    path: '/apps/email/:filter',
    component: () => import('@/views/apps/email/Email.vue'),
    meta: {      
      parent: 'email',
      no_scroll: true,
      breadcrumb: [
        { title: 'Inicio', url: '/' },
        { title: 'Tramites', active: true }
      ],
      pageTitle: 'Tramites'
    }
  },
];

const rutas_full_page = [
  {
    path: '/pages/login',
    name: 'page-login',
    component: () => import('@/views/pages/Login.vue')
  },
  {
    path: '/pages/error-404',
    name: 'page-error-404',
    component: () => import('@/views/pages/Error404.vue')
  },
  {
    path: '/seleccion-rol',
    name: 'Selección de rol',
    component: () => import('@/views/pages/Roles.vue')
  },
  // {
  //   path: '/user-list',
  //   name: 'app-user-list',
  //   component: () => import('@/views/dashboard/components/alumnos/UserList.vue'),
  //   meta: {
  //     breadcrumb: [
  //       { title: 'Home', url: '/' },
  //       { title: 'User' },
  //       { title: 'List', active: true }
  //     ],
  //     pageTitle: 'User List',
  //     rule: 'editor'
  //   }
  // },
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // MAIN LAYOUT ROUTES
    {
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: rutas
    },
    // FULL PAGE LAYOUTS
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: rutas_full_page
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
});


router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

router.beforeEach((to, from, next) => {
  // console.log('============================================ ROUTER ============================================');
  localStorage.setItem("INTERNET_DISCONNECTED", 0);
  localStorage.setItem("TIMEOUT", 0);

  if (store.state.token === null) {   // TOKEN DOESN'T EXIST
    console.log("Token doesn't exist");

    if (to.query.token !== undefined) {   // I HAVE A NEW TOKEN, SO I HAVE TO SAVE IT AND REDIRECT 
      console.log("Llegó token en URL");
      store.dispatch("set_token", to.query.token);
      // return next('/seleccion-rol');

      load_userData(next, to.query.token);
    } else {    // No llegó token    
      console.log("No llegó token en URL");
      return next();

      // window.location.href = process.env.VUE_APP_REDIRECT_LOGIN;
    }
  } else {    // I HAVE TOKEN IN LOCALSTORAGE
    console.log("I have a token");
    return next();
    // let token = (to.query.token !== undefined) ? to.query.token : store.state.token;
    // let token_valid = new Promise((resolve, reject) => {
    //     its_alive_token(resolve, reject, token);
    // });

    // token_valid.then(() => {
    //     if (to.query.token !== undefined) {     // IF I HAD AN OLD TOKEN AND I WILL REPLACE IT (NEW LOGIN)
    //         localStorage.clear();
    //         store.dispatch("set_token", to.query.token);
    //         load_userData(next);
    //     } else {    // I HAVE VALID TOKEN, SO I CONTINUE
    //         do_breadcrumb(to);
    //         return next();
    //     }          
    // });
  }
});

// GET USER'S DATA
function load_userData(next) {
  getUserData().then(response => {
    if (response.data.status === 200) {
      console.log(response.data.data);
      let data = {};
      data.general = response.data.data;
      data.general.id = response.data.session.persona;
      data.session = response.data.session;
      data.profesion = response.data.profesion;
      data.dependencia = response.data.dependencia;
      store.dispatch("account/set_userData", data);
      
      return next('/seleccion-rol');

      // data.user_id = from_response.session.uid;
      // data.person_id = from_response.session.persona;
      // data.cuenta = from_response.session.cuenta;
      // data.ent_fed = '';

      // store.dispatch("set_userData", data);

      // load_menu();
      // load_userEf(response.data);

      // let promesa = new Promise((resolve, reject) => {
      //   // load_permisos(resolve, reject);  

      // });

      // promesa.then(() => {
      //   return next('/seleccion-rol');
      //   // return next('/callback');
      // }).catch(function (error) {
      //   Vue.prototype.$vs.notify({
      //     title: 'Error de permisos',
      //     text: error,
      //     icon: 'cancel',
      //     position: 'top-right',
      //     color: 'primary',
      //     time: 8000,
      //   });
      // });

    } else {
      // Status isn't 200
      console.log("Status isn't 200");
      // window.location.href = process.env.VUE_APP_REDIRECT_LOGIN;
    }
  });
}

// LOAD USER EF
// function load_userEf(from_response) {
//   let data = {}
//   data = from_response.data;
//   data.user_id = from_response.session.uid;
//   data.person_id = from_response.session.persona;
//   data.cuenta = from_response.session.cuenta;
//   data.ent_fed = '';

//   store.dispatch("set_userData", data);

//   getUserEF({ uid: from_response.session.uid }).then(response => {
//       if (response.status === 200 || response.data !== null || response.data !== 'undefined') {
//           store.dispatch("set_userEF", response.data.entidad);
//       } else {
//           Vue.prototype.$vs.notify({
//               title: 'Problema con entidad',
//               text: 'Usuario no tiene entidad federatica registrada',
//               icon: 'cancel',
//               position: 'top-right',
//               color: 'primary',
//               time: 8000,
//           });
//       }
//   });
// }

export default router
