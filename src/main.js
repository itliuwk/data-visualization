import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import ElementUI from 'element-ui';

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'

Vue.prototype.$echarts = echarts
import './style/index.css'

import '../node_modules/echarts/map/js/province/guangdong.js' // 引入广东地图数据

window._vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
