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



/**
 * 垃圾数据面板 / 各区分类部署实施效益折线图
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_districtThrowDiagram(params) {
    return request({
        url: '/rb/api/board/districtThrowDiagram',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 积分兑换统计面积图
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_orderTrend(params) {
    return request({
        url: '/rb/api/board/orderTrend',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 设备分布柱状图
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_locationDevices(params) {
    return request({
        url: '/rb/api/board/locationDevices',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 设备状况监控
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_deviceState(params) {
    return request({
        url: '/rb/api/board/deviceState',
        method: 'get',
        params,
    }).then(res => res.data.data)
}

/**
 * 垃圾数据面板 / 累计转换率
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_orderCustomerSummary(params) {
    return request({
        url: '/rb/api/board/orderCustomerSummary',
        method: 'get',
        params,
    }).then(res => res.data.data)
}


/**
 * 垃圾数据面板 / 积分兑换订单统计
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_cityOrderSummary(params) {
    return request({
        url: '/rb/api/board/cityOrderSummary',
        method: 'get',
        params,
    }).then(res => res.data.data)
}



/**
 * 垃圾数据面板 / 地图社区位置和设备信息
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get_location(params) {
    return request({
        url: '/rb/api/board/location',
        method: 'get',
        params,
    }).then(res => res.data.data)
}
