import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allParams: {
            province: '广东省',
            provinceSpell: 'GuangDong',
            city: '广州市',
            citySpell: 'GuangZhou',
        },
        loadSetInterval: 0
    },
    mutations: {
        setParams(state, params) {
            state.allParams = params;
        },
        setLoadSetInterval(state, params) {
            state.loadSetInterval = params;
        }
    },
    actions: {},
    modules: {}
})
