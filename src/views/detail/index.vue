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
                    <div style="width: 284px">
                        <p class="title"><span>{{detail.name}}</span><span>业主人数：{{detail.num}}</span></p>
                        <div class="info">
                            <img :src="detail.img" alt="">
                            <div class="address">
                                <p>地址：{{detail.address}}</p>
                                <p>
                                    <span style="padding-right: 20px">垃圾桶：{{detail.a}}台</span>
                                    <span>取货机：{{detail.b}}台</span>
                                </p>
                            </div>
                            <p class="to_detail" @click="toDetail(detail)">社区详情</p>
                        </div>
                    </div>
                </el-amap-info-window>
            </el-amap>
        </div>
        <div class="table">
            <div>
                <h4>设备信息</h4>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column prop="name" label="垃圾箱设备信息"></el-table-column>
                    <el-table-column prop="name" label="编号"></el-table-column>
                    <el-table-column prop="name" label="垃圾箱类型"></el-table-column>
                    <el-table-column prop="name" label="状态"></el-table-column>
                    <el-table-column prop="name" label="满溢情况"></el-table-column>
                    <el-table-column prop="name" label="经度"></el-table-column>
                    <el-table-column prop="name" label="维度"></el-table-column>
                    <el-table-column prop="name" label="桶内温度"></el-table-column>
                    <el-table-column prop="name" label="联系人"></el-table-column>
                    <el-table-column prop="name" label="联系人电话"></el-table-column>
                </el-table>
            </div>
            <div style="margin-top: 20px;">
                <h4>苦瓜小区垃圾箱报警记录</h4>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column prop="name" label="报警信息"></el-table-column>
                    <el-table-column prop="date" label="报警时间"></el-table-column>
                    <el-table-column prop="date" label="接触时间"></el-table-column>
                    <el-table-column prop="name" label="报警等级">
                        <template slot-scope="tableData">
                            <span class="level">紧急</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="报警状态"></el-table-column>
                </el-table>
            </div>
        </div>
    </div>

</template>


<script>
    export default {
        data: function () {
            return {
                zoom: 18,
                center: [113.264434, 23.129162],
                markers: [],
                windows: [],
                window: '',
                detail: {
                    name: '番禺小区',
                    num: 1000,
                    address: "广东省广州市番禺区市桥红 袋鼠路新华街水泥砖小区7街901",
                    a: 10,
                    b: 8,
                    img: 'https://cdn.renqilai.com/2019_12_09/11_12_03_xiaoqu.png'

                },

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
                this.init();

            }
        },
        created() {
            this.init();
        },
        mounted() {

        },
        methods: {
            init() {
                let markers = [];
                let windows = [];

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
            toDetail(id) {
                console.log(id);
            },
            mapClick() {
                alert(123)
            }
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

            .level {
                padding: 5px 10px;
                color: #fff;
                background: red;
                border-radius: 10px;
            }
        }
    }


</style>
