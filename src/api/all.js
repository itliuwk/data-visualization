import request from '../utils/request'


/**
 * 垃圾数据面板 / 省用户数
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_provinceCustomers(params) {
    return request({
        url: '/rb/api/board/provinceCustomers',
        method: 'get',
        params,
    }).then(res => res.data.data)
}



/**
 * 垃圾数据面板 / 省垃圾投放数
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_provinceThrow(params) {
    return request({
        url: '/rb/api/board/provinceThrow',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 省垃圾投放排名
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_provinceThrowRank(params) {
    return request({
        url: '/rb/api/board/provinceThrowRank',
        method: 'get',
        params,
    }).then(res => res.data.data)
}




/**
 * 垃圾数据面板 / 省设备统计
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_provinceDevice(params) {
    return request({
        url: '/rb/api/board/provinceDevice',
        method: 'get',
        params,
    }).then(res => res.data.data)
}



/**
 * 垃圾数据面板 / 省订单统计
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_provinceOrderSummary(params) {
    return request({
        url: '/rb/api/board/provinceOrderSummary',
        method: 'get',
        params,
    }).then(res => res.data.data)
}




/**
 * 垃圾数据面板 / 省城市订单排行
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_cityOrderRank(params) {
    return request({
        url: '/rb/api/board/cityOrderRank',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

