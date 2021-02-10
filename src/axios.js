import axios from 'axios'
// import Vue from 'vue'

const baseURL = ""

const service = axios.create({
  baseURL: baseURL
  // You can add your headers here
})


// REQUEST INTERCEPTOR
service.interceptors.request.use(config => {
  return config;
}, error => {
  // Vue.prototype.$vs.notify({
  //   title: 'Error request',
  //   text: error.response.message,
  //   icon: 'cancel',
  //   position: 'top-right',
  //   color: 'danger',
  // })

  return Promise.reject(error);
});


// RESPONSE INTERCEPTOR
service.interceptors.response.use((response) => {
  return response
}, error => {
  return Promise.reject(error);
});


export default service