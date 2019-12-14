import axios from 'axios'
import {BASE_API} from "../config";


const server = axios.create({
    baseURL: BASE_API,
    timeout: 5000
});

/**
 * 请求体  设置一些公共的 token  处理 参数 data等
 */
server.interceptors.request.use(config => {

    return config;
}, error => {
    return Promise.reject(error)
});


/**
 * 响应体  处理数据
 */
server.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
});

export default server;
