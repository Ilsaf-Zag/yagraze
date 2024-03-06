import axios from "axios";
import router from "@/js/router/index.js";

let Api = axios.create({
    baseURL: "http://localhost:8000/api"
});

Api.defaults.withCredentials = true;

const request = Api.interceptors.request.use(function (config) {


    return config;
}, function (error) {
    return Promise.reject(error);
});



const response= Api.interceptors.response.use(
    (res)=>{
        return res;
    },
    error => {
        if (error.response.status === 401 || error.response.status === 419){
            if (localStorage.getItem('x_xsrf_token')) {
                localStorage.removeItem('x_xsrf_token')
            }
            router.push({name:'NotFound'})
        }
        return Promise.reject(error);
    });


export default {Api}
