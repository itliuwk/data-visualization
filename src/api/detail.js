import request from '../utils/request'


/**
 * 垃圾数据面板 / 获取场地设备
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_locationDevice(params) {
    return request({
        url: '/rb/api/board/locationDevice',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 场地设备总数
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_locationDevice_count(params) {
    return request({
        url: '/rb/api/board/locationDevice/count',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 获取报警记录
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_rubbishAlert(params) {
    return request({
        url: '/rb/api/board/rubbishAlert',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 获取报警记录总数
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_rubbishAlert_count(params) {
    return request({
        url: '/rb/api/board/rubbishAlert/count',
        method: 'get',
        params,
    }).then(res => res.data.data)
}
