<template>
    <div class="all">
        <div class="map">
            <div class="left">
                <div class="user">
                    <img src="../../assets/images/left1.png" alt="">
                    <div class="content">
                        <div class="content-left1">
                            <p>{{title}}累计用户数量</p>
                            <p>
                                <span>{{userNum}}</span>
                                <span>人</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="putIn">
                    <img src="../../assets/images/left2.png" alt="">
                    <div class="content">
                        <div class="content-left2">
                            <p>{{title}}用户投放比例(吨)</p>
                            <div id="putInPie"></div>
                        </div>
                    </div>
                </div>
                <div class="ranking">
                    <img src="../../assets/images/left3.png" alt="">
                    <div class="content">
                        <div class="content-left3">
                            <p>垃圾投放省排名(吨)</p>
                            <div id="rankingLin"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map" class="o-echarts"></div>
            <div class="right">
                <div class="right1">
                    <img src="../../assets/images/right1.png" alt="">
                    <div class="content">

                        <div class="content-right1">
                            <h4 style="padding-top: 35px;color: #fff">{{title}}设备统计</h4>
                            <div class="table" style="padding-top: 5px">
                                <div>
                                    <p>设备总数</p>
                                    <p>垃圾箱</p>
                                    <p>取货机</p>
                                    <p>故障</p>
                                    <p>备用</p>
                                </div>
                                <div>
                                    <p>{{device.device||0}}个</p>
                                    <p>{{device.rubbish||0}}个</p>
                                    <p>{{device.pickup||0}}个</p>
                                    <p>{{device.bad||0}}个</p>
                                    <p>{{device.backup||0}}个</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right2">
                    <img src="../../assets/images/right2.png" alt="">
                    <div class="content">
                        <div class="content-right2">
                            <h4 style="padding-top: 35px;color: #fff">{{title}}订单统计</h4>
                            <div class="table" style="padding: 5px  40px 0 50px">
                                <div>
                                    <p>订单交易额</p>
                                    <p>订单成交总数</p>
                                    <p>订单累计成本</p>
                                    <p>累计收益</p>
                                </div>
                                <div>
                                    <p>{{summary.amount||0}}万</p>
                                    <p>{{summary.cost||0}}万</p>
                                    <p>{{summary.order||0}}万</p>
                                    <p>{{summary.profit||0}}万</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right3">
                    <img src="../../assets/images/right3.png" alt="">
                    <div class="content">
                        <div class="content-right3">
                            <p>{{title}}城市销售额排名</p>
                            <div id="cityLin"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {toThousands} from '@/utils/index'
    import echarts from 'echarts';
    import china from 'echarts/map/js/china'
    import vPinyin from '@/utils/py/vue-py'
    import Alert from '@/utils/message'
    import {
        get_provinceCustomers,
        get_provinceThrow,
        get_provinceThrowRank,
        get_provinceDevice,
        get_provinceOrderSummary,
        get_cityOrderRank
    } from '@/api/all'

    export default {
        name: 'echart-map',
        data() {
            return {
                userNum: 0,
                device: {},
                summary: {},
                title: '全国',
                params: {
                    province: '',
                    provinceSpell: ''
                }
            }
                ;
        },
        mounted() {
            this.loadMap();
            this.init();
        },
        methods: {
            init() {
                this.get_provinceCustomers();
                this.get_provinceDevice();
                this.get_provinceOrderSummary();
                this.putInPie();
                this.rankingLin();
                this.cityLin();
            },
            loadMap() {
                let that = this;
                this.map = echarts.init(document.getElementById('map'));
                let data = [];
                let option = {
                    tooltip: {
                        show: false, //不显示提示标签
                        formatter: '{b}', //提示标签格式
                        backgroundColor: "#ff7f50",//提示标签背景颜色
                        textStyle: {color: "#fff"} //提示标签字体颜色
                    },
                    series: [{
                        type: 'map',
                        mapType: 'china',
                        label: {
                            normal: {
                                show: true,//显示省份标签
                                textStyle: {color: "#c71585"}//省份标签字体颜色
                            },
                            emphasis: {//对应的鼠标悬浮效果
                                show: true,
                                textStyle: {color: "#800080"}
                            }
                        },
                        zoom: 1.1,
                        roam: true,
                        itemStyle: {
                            normal: {
                                borderWidth: .5,//区域边框宽度
                                borderColor: '#009fe8',//区域边框颜色
                                areaColor: "#fff",//区域颜色
                            },
                            emphasis: {
                                borderWidth: .5,
                                borderColor: '#4b0082',
                                areaColor: "#6EA3EA",
                            }
                        },
                        data: data
                    }],
                };
                this.map.setOption(option);
                this.map.on('click', function (params) {
                    // Alert.success(params.name);
                    let data = [
                        {
                            name: params.name, selected: true
                        }
                    ];
                    if (option.series[0].data[0]) {
                        if (params.name == option.series[0].data[0].name) {
                            data = [];
                        }
                    }
                    if (data.length) {
                        that.params = {
                            province: data[0].name + '省',
                            provinceSpell: vPinyin.chineseToPinYin(data[0].name)
                        };
                        that.title = data[0].name
                    } else {
                        that.params = {
                            province: '',
                            provinceSpell: ''
                        };
                        that.title = '全国'
                    }
                    that.init();
                    option.series[0].data = data;
                    that.map.setOption(option);
                });

            },
            get_provinceCustomers() {
                get_provinceCustomers(this.params).then(res => {
                    this.userNum = toThousands(res);
                })
            },
            get_provinceDevice() {
                get_provinceDevice(this.params).then(res => {
                    this.device = res || {};
                })
            },
            get_provinceOrderSummary() {
                get_provinceOrderSummary(this.params).then(res => {
                    this.summary = res || {};
                })
            },
            putInPie() {
                let myChart = this.$echarts.init(document.getElementById('putInPie'));
                get_provinceThrow(this.params).then(res => {
                    myChart.clear();
                    let option = {
                        tooltip: {
                            trigger: 'item',
                            formatter: " <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                            x: 'center',
                            itemWidth: 15,
                            itemHeight: 15,
                            bottom: 0,
                            icon: 'circle',
                            data: ["干垃圾", "湿垃圾", "有害垃圾", "可回收垃圾"],
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        },
                        series: [
                            {
                                name: '',
                                type: 'pie',
                                radius: ['50%', '65%'],
                                center: ['50%', '40%'],
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'center',
                                        color: '#fff'
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '12'
                                        }
                                    }
                                },

                                data: [
                                    {value: res.dry, name: '干垃圾'},
                                    {value: res.wet, name: '湿垃圾'},
                                    {value: res.harm, name: '有害垃圾'},
                                    {value: res.recycle, name: '可回收垃圾'}
                                ],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    },
                                    normal: {
                                        color: function (params) {
                                            //自定义颜色
                                            var colorList = [
                                                '#DFDFDF', '#198FF9', '#EA2F41', '#F9A715'
                                            ];
                                            return colorList[params.dataIndex]
                                        }
                                    }
                                }
                            }
                        ]
                    };
                    myChart.setOption(option, true)
                });

            },
            rankingLin() {
                let myChart = this.$echarts.init(document.getElementById('rankingLin'));
                get_provinceThrowRank(this.params).then(res => {
                    let yAxisData = [], seriesData = [];
                    res.map(item => {
                        yAxisData.push(item.province);
                        seriesData.push(item.weight);
                        return item;
                    });
                    myChart.clear();
                    let option = {
                        title: {
                            text: '',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },

                        grid: {
                            top: 10,
                            left: '13%',
                            right: '10%',
                            bottom: 0,
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01],
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        yAxis: {
                            type: 'category',
                            data: yAxisData,
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'bar',
                                data: seriesData,
                                itemStyle: {
                                    color: '#FFE711'
                                }
                            }
                        ]
                    };
                    myChart.setOption(option, true)
                });

            },
            cityLin() {
                let myChart = this.$echarts.init(document.getElementById('cityLin'));
                get_cityOrderRank(this.params).then(res => {
                    let xAxisData = [], seriesData = [];
                    res.map(item => {
                        xAxisData.push(item.city);
                        seriesData.push(item.amount);
                        return item;
                    });
                    myChart.clear();
                    let option = {
                        title: {
                            text: '',
                            subtext: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },

                        grid: {
                            top: 10,
                            left: '13%',
                            right: '10%',
                            bottom: 0,
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value',
                            boundaryGap: [0, 0.01],
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        xAxis: {
                            type: 'category',
                            data: xAxisData,
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'bar',
                                data: seriesData,
                                itemStyle: {
                                    color: '#FFE711'
                                }
                            }
                        ]
                    };
                    myChart.setOption(option, true)
                });

            }
        }
    };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

    .all {
        height: calc(100vh - 60px);
        padding-top: 70px;

        .title {
            height: 60px;
            text-align: center;
            color: #fff;

            img {
                height: 60px;
            }
        }
    }

    .map {
        display: flex;
        height: calc(100% - 60px);

        > div {
            flex: 1;
            padding: 0 20px;
        }

        .left {
            flex: 1;
            text-align: center;

            .user {
                height: 180px;
                margin-bottom: 20px;
                position: relative;

                .content-left1 {
                    padding-top: 50px;
                    color: #fff;

                    > p:nth-child(1) {
                        font-size: 16px;
                    }

                    > p:nth-child(2) {
                        margin-top: 15px;

                        > span:nth-child(1) {
                            font-size: 35px;
                        }
                    }

                }
            }

            .putIn {
                height: 220px;
                margin-bottom: 20px;
                position: relative;

                .content-left2 {
                    padding-top: 40px;
                    color: #fff;
                }

                #putInPie {
                    width: 100%;
                    height: 120px;
                }
            }

            .ranking {
                height: 280px;
                position: relative;
                text-align: center;

                .content-left3 {
                    padding-top: 40px;
                    color: #fff;
                }

                #rankingLin {
                    width: 100%;
                    height: 160px;
                }
            }

            img {
                width: 100%;
                height: 100%;
            }

            .content {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
            }


        }

        .right {
            flex: 1;
            text-align: center;


            .content {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
            }

            .right1 {
                height: 220px;
                margin-bottom: 20px;
                position: relative;
            }

            .right2 {
                height: 200px;
                margin-bottom: 20px;
                position: relative;
            }

            .right3 {
                height: 280px;
                position: relative;

                .content-right3 {
                    padding-top: 40px;
                    color: #fff;
                }

                #cityLin {
                    width: 100%;
                    height: 180px;
                }
            }

            img {
                width: 100%;
                height: 100%;
            }


            .table {
                color: #fff;
                display: flex;
                padding: 0 50px;
                padding-right: 30px;
                width: 100%;
                text-align: center;
                margin-top: 5px;

                > div {
                    border: 1px solid #19FF9B;
                    width: 48%;

                    p {
                        border-bottom: 1px solid #19FF9B;
                        height: 20px;
                        line-height: 22px;
                    }

                    p:last-child {
                        border: none !important;
                    }
                }

                > div:nth-child(2) {
                    border-left: none;
                }
            }

        }

        #map {
            flex: 2;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 800px;
        }

    }

    .o-echarts {
        min-width: 30px;
        min-height: 30px;
        width: 800px;
        height: 600px;
    }

    /deep/ .el-dialog__body {
        border: 10px solid #fff;
        padding: 0;
    }

    /deep/ .el-dialog__header {
        padding: 0;
    }
</style>
