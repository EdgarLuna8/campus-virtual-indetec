/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const state = {
  notificaciones: [
    {
      id: 0,
      nombre: 'New Message',
      msg: 'Are your going to meet me tonight?',
      unread: false,
      // time: this.randomDate({ sec: 10 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 1,
      nombre: 'New Order Recieved',
      msg: 'You got new order of goods.',
      unread: false,
      // time: this.randomDate({ sec: 40 }),
      time: "10 minutos",
      // category: 'success'
    },
    {
      id: 2,
      nombre: 'Server Limit Reached!',
      msg: 'Server have 99% CPU usage.',
      unread: false,
      // time: this.randomDate({ min: 1 }),
      time: "10 minutos",
      // category: 'danger'
    },
    {
      id: 3,
      nombre: 'New Mail From Peter',
      msg: 'Cake sesame snaps cupcake',
      unread: false,
      // time: this.randomDate({ min: 6 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 4,
      nombre: 'Bruce\'s Party',
      msg: 'Chocolate cake oat cake tiramisu',
      unread: false,
      // time: this.randomDate({ hr: 2 }),
      time: "10 minutos",
      // category: 'warning'
    },
    {
      id: 5,
      nombre: 'New Message',
      msg: 'Are your going to meet me tonight?',
      unread: false,
      // time: this.randomDate({ sec: 10 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 6,
      nombre: 'New Order Recieved',
      msg: 'You got new order of goods.',
      unread: false,
      // time: this.randomDate({ sec: 40 }),
      time: "10 minutos",
      // category: 'success'
    },
    {
      id: 7,
      nombre: 'Server Limit Reached!',
      msg: 'Server have 99% CPU usage.',
      unread: false,
      // time: this.randomDate({ min: 1 }),
      time: "10 minutos",
      // category: 'danger'
    },
    {
      id: 8,
      nombre: 'New Mail From Peter',
      msg: 'Cake sesame snaps cupcake',
      unread: false,
      // time: this.randomDate({ min: 6 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 9,
      nombre: 'Bruce\'s Party',
      msg: 'Chocolate cake oat cake tiramisu',
      unread: false,
      // time: this.randomDate({ hr: 2 }),
      time: "10 minutos",
      // category: 'warning'
    },
  ],
  sinleer_notificaciones: [
    {
      id: 0,
      nombre: 'New Message',
      msg: 'Are your going to meet me tonight?',
      unread: true,
      // time: this.randomDate({ sec: 10 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 1,
      nombre: 'New Order Recieved',
      msg: 'You got new order of goods.',
      unread: true,
      // time: this.randomDate({ sec: 40 }),
      time: "10 minutos",
      // category: 'success'
    },
    {
      id: 2,
      nombre: 'Server Limit Reached!',
      msg: 'Server have 99% CPU usage.',
      unread: true,
      // time: this.randomDate({ min: 1 }),
      time: "10 minutos",
      // category: 'danger'
    },
    {
      id: 3,
      nombre: 'New Mail From Peter',
      msg: 'Cake sesame snaps cupcake',
      unread: true,
      // time: this.randomDate({ min: 6 }),
      time: "10 minutos",
      // category: 'primary'
    },
    {
      id: 4,
      nombre: 'Bruce\'s Party',
      msg: 'Chocolate cake oat cake tiramisu',
      unread: true,
      // time: this.randomDate({ hr: 2 }),
      time: "10 minutos",
      // category: 'warning'
    }
  ],
}

export default state
