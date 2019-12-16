<template>
    <div class="detail">
        <div class="amap-page-container">
            <el-amap
                    vid="amapDemo1"
                    :center="center"
                    :zoom="zoom"
                    class="amap-demo">
                <el-amap-marker v-for="marker in markers" :position="marker.position"
                                :events="marker.events"></el-amap-marker>
                <el-amap-info-window v-if="window" :position="window.position" :visible="window.visible"
                                     :id="window.id">
                    <!--                    <div style="width: 284px">-->
                    <!--                        <p class="title"><span>{{detail.name}}</span><span>业主人数：{{detail.num}}</span></p>-->
                    <!--                        <div class="info">-->
                    <!--                            <img :src="detail.img" alt="">-->
                    <!--                            <div class="address">-->
                    <!--                                <p>地址：{{detail.address}}</p>-->
                    <!--                                <p>-->
                    <!--                                    <span style="padding-right: 20px">垃圾桶：{{detail.a}}台</span>-->
                    <!--                                    <span>取货机：{{detail.b}}台</span>-->
                    <!--                                </p>-->
                    <!--                            </div>-->
                    <!--                            <p class="to_detail" @click="toDetail(detail)">社区详情</p>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </el-amap-info-window>
            </el-amap>
        </div>
        <div class="table">
            <div>
                <el-table
                        :data="rubbishData"
                        style="width: 100%">
                    <el-table-column prop="name" label="垃圾箱设备信息"></el-table-column>
                    <el-table-column prop="id" label="编号"></el-table-column>
                    <el-table-column prop="type" label="场地地址">
                        <template slot-scope="rubbishData">
                            <span>{{rubbishData.row.locationName}}</span>
                            <span v-if="rubbishData.row.province">{{rubbishData.row.province+rubbishData.row.city+rubbishData.row.district+rubbishData.row.street}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="active" label="状态">
                        <template slot-scope="rubbishData">
                            <span v-if="rubbishData.row.active">在线</span>
                            <span v-else>离线</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="full" label="满溢情况">
                        <template slot-scope="rubbishData">
                            <span v-if="rubbishData.row.full">满溢</span>
                            <span v-else>未满溢</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="temperature" label="桶内温度">
                        <template slot-scope="rubbishData">
                            <span>{{rubbishData.row.temperature}}°</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="contactName" label="联系人"></el-table-column>
                    <el-table-column prop="contactMobile" label="联系人电话"></el-table-column>
                </el-table>
                <el-pagination
                        background
                        :page-size="rubbishParams.size"
                        layout="total,prev, pager, next"
                        :total="rubbishCount"
                        :page-count="rubbishPage"
                        @current-change="currentChange"
                >
                </el-pagination>
            </div>
            <div style="margin-top: 20px;">
                <el-table
                        :data="pickupData"
                        style="width: 100%">
                    <el-table-column prop="name" label="取货机设备信息"></el-table-column>
                    <el-table-column prop="id" label="编号"></el-table-column>
                    <el-table-column prop="locationName" label="场地地址">
                        <template slot-scope="pickupData">
                            <span>{{pickupData.row.locationName}}</span>
                            <span v-if="pickupData.row.province">{{pickupData.row.province+pickupData.row.city+pickupData.row.district+pickupData.row.street}}</span>
                        </template>
                    </el-table-column>
                    >
                    <el-table-column prop="state" label="状态">
                        <template slot-scope="pickupData">
                            <span v-if="pickupData.row.active">在线</span>
                            <span v-else>离线</span>
                        </template>
                    </el-table-column>
                    <!--                    <el-table-column prop="state" label="下辖商品数"></el-table-column>-->
                    <!--                    <el-table-column prop="state" label="库存情况"></el-table-column>-->

                    <el-table-column prop="contactName" label="联系人"></el-table-column>
                    <el-table-column prop="contactMobile" label="联系人电话"></el-table-column>
                </el-table>
                <el-pagination
                        background
                        :page-size="pickupParams.size"
                        layout="total,prev, pager, next"
                        :total="pickupCount"
                        :page-count="pickupPage"
                        @current-change="currentPickupChange"
                >
                </el-pagination>

            </div>
            <div style="margin-top: 20px;">
                <h4>番禺小区垃圾箱报警记录</h4>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column prop="name" label="报警信息"></el-table-column>
                    <el-table-column prop="createdDate" label="报警时间"></el-table-column>
                    <el-table-column prop="solveDate" label="解除时间"></el-table-column>
                    <el-table-column prop="name" label="报警等级">
                        <template slot-scope="tableData">
                            <span class="level">紧急</span>
                            <span>{{tableData.row.grade}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="报警状态">
                        <template slot-scope="tableData">
                            <span>已解除</span>
                            <span>{{tableData.row.state}}</span>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                        background
                        :page-size="tableParams.size"
                        layout="total,prev, pager, next"
                        :total="tableCount"
                        :page-count="tablePage"
                        @current-change="currentTableChange"
                >
                </el-pagination>
            </div>
        </div>
    </div>

</template>


<script>
    import {get_locationDevice, get_locationDevice_count, get_rubbishAlert, get_rubbishAlert_count} from '@/api/detail'


    export default {
        data: function () {
            return {
                zoom: 18,
                center: [113.264434, 23.129162],
                markers: [],
                windows: [],
                window: '',
                rubbishData: [],
                rubbishCount: 0,
                rubbishParams: {
                    size: 5,
                    from: 0
                },
                pickupData: [],
                pickupCount: 0,
                pickupParams: {
                    size: 5,
                    from: 0
                },
                tableData: [],
                tableCount: 0,
                tableParams: {
                    size: 5,
                    from: 0
                },
            };
        },
        props: {
            location: {
                type: Array
            },
            detail: {
                type: Object
            }
        },
        created() {
            this.init();
        },
        computed: {
            rubbishPage: function () {
                return parseInt(this.rubbishParams.from / this.rubbishParams.size) + 1;
            },
            pickupPage: function () {
                return parseInt(this.pickupParams.from / this.pickupParams.size) + 1;
            },
            tablePage: function () {
                return parseInt(this.tableParams.from / this.tableParams.size) + 1;
            },
        },
        mounted() {
            this.get_rubbish();
            this.get_pickup();
            this.get_table();
        },
        methods: {
            init() {
                let markers = [];
                let windows = [];
                this.center = this.detail.lnglat;

                let self = this;
                let points = [
                    {
                        id: 1,
                        lnglat: [113.317361, 23.083454]
                    },
                    {
                        id: 2,
                        lnglat: [113.406473, 23.185547]
                    },
                    {
                        id: 3,
                        lnglat: [113.367379, 22.987006]
                    }
                ];

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
                        id: points[i].id
                    });
                }

                this.markers = markers;
                this.windows = windows;
            },
            get_rubbish() {
                let params = {
                    locationId: this.detail.id,
                    typeId: 'rubbish',
                    ...this.rubbishParams
                };
                get_locationDevice(params).then(res => {
                    this.rubbishData = res;
                });
                get_locationDevice_count(params).then(res => {
                    this.rubbishCount = res;
                });
            },
            get_pickup() {
                let params = {
                    locationId: this.detail.id,
                    typeId: 'pickup',
                    ...this.pickupParams
                };
                get_locationDevice(params).then(res => {
                    this.pickupData = res;
                });
                get_locationDevice_count(params).then(res => {
                    this.pickupCount = res;
                });
            },
            get_table() {
                Date.prototype.Format = function (fmt) { //author: meizz
                    var o = {
                        "M+": this.getMonth() + 1,                 //月份
                        "d+": this.getDate(),                    //日
                        "h+": this.getHours(),                   //小时
                        "m+": this.getMinutes(),                 //分
                        "s+": this.getSeconds(),                 //秒
                        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                        "S": this.getMilliseconds()             //毫秒
                    };
                    if (/(y+)/.test(fmt))
                        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                    for (var k in o)
                        if (new RegExp("(" + k + ")").test(fmt))
                            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    return fmt;
                };
                let params = {
                    locationId: this.detail.id,
                    ...this.tableParams
                };
                get_rubbishAlert(params).then(res => {
                    res.createdDate = new Date(res.createdDate).Format("yyyy-MM-dd hh:mm:ss");
                    res.solveDate = new Date(res.solveDate).Format("yyyy-MM-dd hh:mm:ss");
                    this.tableData = res;
                });
                get_rubbishAlert_count(params).then(res => {
                    this.tableCount = res;
                });
            },
            currentChange(res) {//翻页
                this.rubbishParams = {
                    ...this.rubbishParams,
                    from: parseInt(res - 1) * this.rubbishParams.size,
                    size: 5,
                };
                this.get_rubbish()
            },
            currentPickupChange(res) {//翻页
                this.pickupParams = {
                    ...this.pickupParams,
                    from: parseInt(res - 1) * this.pickupParams.size,
                    size: 5,
                };
                this.get_pickup()
            },
            currentTableChange(res) {//翻页
                this.tableParams = {
                    ...this.tableParams,
                    from: parseInt(res - 1) * this.tableParams.size,
                    size: 5,
                };
                this.get_table()
            },
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    .detail {
        display: flex;
        height: 800px;

        .amap-page-container {
            flex: 1;
            height: 100%;

            .amap-demo {
                height: 800px;
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
        }

        .table {
            flex: 2;
            margin-left: 20px;
            overflow: auto;

            .level {
                padding: 5px 10px;
                color: #fff;
                background: red;
                border-radius: 10px;
            }
        }
    }


</style>
