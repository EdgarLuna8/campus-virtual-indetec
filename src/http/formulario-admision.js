import axios from "../axios.js"
// import store from '../store/store'

export function get_tbl_nla(params) {
    return axios({
        // url: window.location.protocol +"//"+ window.location.hostname + process.env.VUE_APP_SERVICE_APIF + '?origin=' + origin + '&token=' + store.state.token + '&wsarchivo',
        // url: "http://dev.www.indetec.gob.mx/ingreso?task=getdata",
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_SERVICE_APICV +"?info_inicial&origin="+ process.env.VUE_APP_ORIGIN_API,
        method: 'GET',
        params
    });
}

export function post_data(data) {
    return axios({
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_SERVICE_APICV,
        method: 'POST',
        data
    });
}
