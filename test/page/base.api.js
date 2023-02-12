import dotenv, { config } from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseAPI = axios.create({
    baseURL : process.env.BASE_URL,
    baseAUTH : process.env.AUTH_TOKEN,
    headers :{
        "content-type" : "application/json",
        "accept" : "*/*"
    },
    validateStatus: function(){
        return true
    }
});

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default BaseAPI