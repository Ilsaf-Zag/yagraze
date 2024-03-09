import axios from "axios";
import router from "@/js/router/index.js";

axios.interceptors.response.use(
    (res)=>{
        return res;
    },
    error => {

        if (error.response.status === 401 || error.response.status === 419){
            router.push({name:'login'})
        }
        return Promise.reject(error);
    });


export default {axios}
