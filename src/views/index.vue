<template>
    <div class="page">
        <div class="title">
            <img src="../assets/images/kuzhua.png" alt="">
            <div class="distpicker">
                <v-distpicker @province="province" @city="city" hide-area :placeholders="{province: '全国', city: '市' }"
                              :province="select.province" :city="select.city"></v-distpicker>
                <p @click="view">查看</p>
            </div>
        </div>

        <div class="">
            <City v-show="isCity" :location="location" :loadData="loadData"></City>
            <All v-if="!isCity"></All>
        </div>


    </div>
</template>

<script>


    import All from './all/index'
    import City from './city/index'


    import VDistpicker from 'v-distpicker'

    import axios from 'axios'
    import Alert from '@/utils/message'
    import {key, TIME_REFRESH} from '../config'

    import vPinyin from '@/utils/py/vue-py'

    let pinyin = require('js-pinyin');

    pinyin.setOptions({checkPolyphone: false, charCase: 0});

    export default {
        name: "index",
        data() {
            return {
                msg: "index",
                select: {province: '广东省', city: '广州市'},
                location: [],
                isCity: true,
                key: key,
                loadData: 0,
                timer: null
            }
        },
        components: {
            VDistpicker,
            All,
            City
        },

        mounted() {
            this.view();
        },
        methods: {
            province(data) {
                this.select = {
                    ...this.select,
                    province: data.value
                }
            },
            city(data) {
                this.select = {
                    ...this.select,
                    city: data.value
                }
            },
            view() {
                if (this.select.province == '全国') {
                    clearInterval(this.timer);
                    this.loadData = Math.random();
                    this.isCity = false;
                    return false;
                }
                clearInterval(this.timer);
                if (!this.select.province || this.select.province == '全国') {
                    Alert.fail('省份不能为空');
                    return false;
                }
                if (!this.select.city || this.select.city == '市') {
                    Alert.fail('城市不能为空');
                    return false;
                }
                let params = this.select.province + this.select.city;
                let obj = {
                    province: this.select.province,
                    provinceSpell: vPinyin.chineseToPinYin(this.select.province).replace('Sheng', ''),
                    city: this.select.city,
                    citySpell: vPinyin.chineseToPinYin(this.select.city).replace('Shi', ''),
                };
                this.isCity = true;
                if (obj.citySpell == 'ShenChou') {
                    obj = {
                        ...obj,
                        citySpell: 'ShenZhen'
                    }
                }
                this.loadData = Math.random();
                this.$store.commit('setParams', obj);
                this.timer = setInterval(() => {
                    this.$store.commit('setLoadSetInterval',Math.random());

                }, TIME_REFRESH);

                axios.get('http://restapi.amap.com/v3/geocode/geo?address=' + params + '&output=JSON&key=' + this.key).then(res => {

                    this.location = res.data.geocodes[0].location.split(',');
                })
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .page {
        width: 100vw;
        height: 100vh;
        background: #3755CB;

        .title {
            height: 60px;
            font-size: 30px;
            text-align: center;
            color: #fff;
            position: relative;

            img {
                height: 60px;
                margin-top: 10px;
            }

            .distpicker {
                position: absolute;
                top: 20px;
                right: 20px;
                display: inline-block;

                /deep/ .distpicker-address-wrapper {
                    display: inline-block;
                }

                p {
                    font-size: 15px;
                    display: inline-block;
                    cursor: pointer;
                    padding: 10px 20px;
                    text-align: center;
                    background: #2F3571;
                    border-radius: 4px;
                    margin-left: 10px;
                }
            }
        }


    }

    /deep/ .el-dialog__body {
        border: 10px solid #fff;
        padding: 0;
    }

    /*/deep/ .el-dialog__header {*/
    /*    padding: 0;*/
    /*}*/
</style>
