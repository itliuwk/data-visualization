

var _BASE_API = "http://192.168.0.164:8088";//


// run build 切换地址
if (process.env.NODE_ENV == 'production') {
    _BASE_API = "https://quxiaapi.renqilai.com";//线上
}

export const BASE_API = _BASE_API;
