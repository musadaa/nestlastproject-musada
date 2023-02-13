import dotenv, { config } from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseAPI = axios.create({
    baseURL : process.env.BASE_URL,
    headers :{
        "content-type" : "application/json",
        "accept" : "*/*",
        Authorization : `Basic YWRtaW46cGFzc3dvcmQxMjM=`
    },
    validateStatus: function(){
        return true
    }
});


export default BaseAPI