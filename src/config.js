let _BASE_API = "http://192.168.0.164:8088";//

let _TIME_REFRESH = 5000000; // 多少秒请求一次数据


// run build 切换地址
if (process.env.NODE_ENV == 'production') {
    _BASE_API = "https://quxiaapi.renqilai.com";//线上
}

export const BASE_API = _BASE_API;
export const TIME_REFRESH = _TIME_REFRESH;
export const key = '1f8ddea28992d3654dda2d03a9367dcb'; //  高德地图唯一 key 值
