import axios from "../axios.js"
import store from '../store/store'


export function get_data(params) {
    return axios({
        // url: window.location.protocol +"//"+ window.location.hostname + process.env.VUE_APP_SERVICE_APIF + '?origin=' + origin + '&token=' + store.state.token + '&wsarchivo',
        // url: "http://dev.cv.indetec.gob.mx/apicv?wsalumno&origin="+ process.env.VUE_APP_ORIGIN_API +"&token=" + store.state.token + "",
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_SERVICE_APICV +"?token=" + store.state.token+"&origin="+ process.env.VUE_APP_ORIGIN_API+"&getUserData=",
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
