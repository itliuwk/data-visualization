import request from '../utils/request'


export function get(params) {
    return request({
        url: '/api/admin/adOrders',
        method: 'get',
        params,
    }).then(res => res.data.data)
}
