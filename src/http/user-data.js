import axios from "../axios.js"
import store from '../store/store'

export function getUserData(params) {
    return axios({
        // url: window.location.protocol +"//"+ window.location.hostname + process.env.VUE_APP_SERVICE_APIF + '?origin='+ origin +'&token=' + store.state.token + '&getUserData',
        // url: "http://dev.cv.indetec.gob.mx/apicv?getUserData&origin=local&token=" + store.state.token,
        url: process.env.VUE_APP_BASE_API + process.env.VUE_APP_SERVICE_APICV +"?getUserData&origin="+ process.env.VUE_APP_ORIGIN_API +"&token=" + store.state.token + "",
        method: 'GET',
        params: params
    })
}