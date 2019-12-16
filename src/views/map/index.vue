<template>
    <div class="amap-page-container">
        <el-amap
                vid="amapDemo"
                :center="center"
                :zoom="zoom"
                mapStyle=""
                class="amap-demo">
            <el-amap-marker v-for="marker in markers" :position="marker.position"
                            :events="marker.events"></el-amap-marker>
            <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible" :id="window.id">
                <div style="width: 284px">
                    <p class="title">
                        <span>{{window.detail.name}}</span>
                        <!--                        <span>业主人数：{{detail.num}}</span>-->
                    </p>
                    <div class="info">
                        <img :src="window.detail.image" alt="">
                        <div class="address">
                            <p>
                                地址：{{window.detail.province+window.detail.city+window.detail.district+window.detail.street}}</p>
                            <p>
                                <span style="padding-right: 20px">垃圾桶：{{window.detail.rubbish}}台</span>
                                <span>取货机：{{window.detail.pickup}}台</span>
                            </p>
                        </div>
                        <p class="to_detail" @click="toDetail(window.detail)">社区详情</p>
                    </div>
                </div>
            </el-amap-info-window>
        </el-amap>

        <el-dialog
                :title="detail.name"
                top="20px"
                :visible.sync="isDetail"
                width="80%">
            <detail v-if="isDetail" :detail="detail"></detail>
        </el-dialog>


    </div>
</template>


<script>
    import Detail from '../detail/index'
    import {get_location} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],

    export default {
        data: function () {
            return {
                zoom: 10,
                center: [113.264434, 23.129162],
                markers: [],
                windows: [],
                window: '',
                detail: {},
                isDetail: false
            };
        },
        props: {
            location: {
                type: Array
            }
        },
        watch: {
            location() {
                this.loading = true;
                this.center = this.location;
                this.zoom = 10;
            }
        },
        components: {
            Detail
        },
        mixins: [mixins],
        methods: {
            init() {
                get_location(this.allParams).then(res => {
                    res.map(item => {
                        item.lnglat = [item.longitude, item.latitude];
                        return item;
                    });

                    let markers = [];
                    let windows = [];

                    let self = this;
                    let points = res;

                    for (let i = 0; i < points.length; i++) {
                        markers.push({
                            position: points[i].lnglat,
                            events: {
                                click() {
                                    self.windows.forEach(window => {
                                        window.visible = false;
                                    });

                                    self.window = self.windows[i];
                                    self.$nextTick(() => {
                                        self.window.visible = true;
                                    });
                                }
                            }
                        });

                        windows.push({
                            position: points[i].lnglat,
                            visible: false,
                            id: points[i].id,
                            detail: points[i]
                        });
                    }

                    this.markers = markers;
                    this.windows = windows;
                });

            },
            toDetail(item) {
                this.isDetail = true;
                this.detail = item;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .amap-demo {
        height: 320px;
    }

    /deep/ .prompt {
        background: white;
        width: 100px;
        height: 200px;
        text-align: center;
    }

    /deep/ .amap-logo, /deep/ .amap-copyright {
        display: none !important;
    }

    .title {
        width: 100%;
        color: #fff;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        background: rgba(92, 102, 252, 1);
        opacity: 1;
        border-radius: 8px 8px 0px 0px;

        span:nth-child(1) {
            padding: 0 20px 0 20px;
        }
    }

    .info {
        padding: 10px;

        img {
            display: inline-block;
            width: 80px;
            height: 60px;
        }

        .address {
            width: 180px;
            display: inline-block;
            color: rgba(32, 32, 32, 1);
            font-size: 10px;
            padding-left: 10px;
        }
    }

    .to_detail {
        margin-top: 5px;
        font-size: 12px;
        text-align: right;
        color: #188ae2;
        cursor: pointer;
    }

    /deep/ .amap-info-outer {
        box-shadow: none !important;
        background: #fff;
        padding: 0 !important;
        border-radius: 8px 8px 0px 0px !important;
    }

    /*/deep/ .el-dialog__body {*/
    /*    border: 10px solid #fff;*/
    /*    padding: 0;*/
    /*}*/

    /*/deep/ .el-dialog__header {*/
    /*    padding: 0;*/
    /*}*/

    /deep/ .el-dialog__headerbtn {
        top: 10px;
    }
</style>
