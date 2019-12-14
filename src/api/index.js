import request from '../utils/request'


/**
 * 垃圾数据面板 / 获取用户，垃圾投放，订单环比
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_allSum(params) {
    return request({
        url: '/rb/api/board/allSum',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 获取用户，垃圾投放，订单实时
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_allLinkRelative(params) {
    return request({
        url: '/rb/api/board/allLinkRelative',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 垃圾投放实时数据
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_todayThrow(params) {
    return request({
        url: '/rb/api/board/todayThrow',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 垃圾投放累计数据
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_allThrow(params) {
    return request({
        url: '/rb/api/board/allThrow',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 社区投放排名
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_locationThrowRank(params) {
    return request({
        url: '/rb/api/board/locationThrowRank',
        method: 'get',
        params,
    }).then(res => res.data.data)
}
