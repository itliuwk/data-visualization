<template>
    <div class="all">
        <div class="map">
            <div class="left">
                <div class="user">
                    <img src="../../assets/images/left1.png" alt="">
                    <div class="content">
                        <div class="content-left1">
                            <p>累计用户数量</p>
                            <p>
                                <span>658,464</span>
                                <span>人</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="putIn">
                    <img src="../../assets/images/left2.png" alt="">
                    <div class="content">
                        <div class="content-left2">
                            <p>用户投放比例(吨)</p>
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
                            <div class="table">
                                <div>
                                    <p>设备总数</p>
                                    <p>垃圾箱</p>
                                    <p>取货机</p>
                                    <p>故障</p>
                                    <p>备用</p>
                                </div>
                                <div>
                                    <p>4210个</p>
                                    <p>3101个</p>
                                    <p>2100个</p>
                                    <p>1222个</p>
                                    <p>4554个</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right2">
                    <img src="../../assets/images/right2.png" alt="">
                    <div class="content">
                        <div class="content-right2">
                            <div class="table" style="padding: 50px  40px 0 50px">
                                <div>
                                    <p>订单交易额</p>
                                    <p>订单成交总数</p>
                                    <p>订单累计成本</p>
                                    <p>累计收益</p>
                                </div>
                                <div>
                                    <p>4210万</p>
                                    <p>3101万</p>
                                    <p>2100万</p>
                                    <p>1222万</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right3">
                    <img src="../../assets/images/right3.png" alt="">
                    <div class="content">
                        <div class="content-right3">
                            <p>城市销售额排名</p>
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

    import Alert from '@/utils/message'

    export default {
        name: 'echart-map',
        data() {
            return {};
        },
        mounted() {
            this.loadMap();
            this.putInPie();
            this.rankingLin();
            this.cityLin();
        },
        methods: {
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
                    option.series[0].data = data;
                    that.map.setOption(option);
                });

            },

            putInPie() {
                let myChart = this.$echarts.init(document.getElementById('putInPie'));
                let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
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
                                {
                                    value: 25, name: '干垃圾', itemStyle: {
                                        color: '#22A6FF'
                                    }
                                },
                                {
                                    value: 105, name: '湿垃圾', itemStyle: {
                                        color: '#FF7F00'
                                    }
                                },
                                {
                                    value: 105, name: '有害垃圾', itemStyle: {}
                                },
                                {
                                    value: 105, name: '可回收垃圾', itemStyle: {}
                                }
                            ]
                        }
                    ]
                };
                myChart.setOption(option)
            },
            rankingLin() {
                let myChart = this.$echarts.init(document.getElementById('rankingLin'));
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
                        data: ['广东省', '山东省', '四川省', '湖南省', '湖北省', '海南省', '陕西省'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [45, 52, 76, 89, 116, 122, 134],
                            itemStyle: {
                                color: '#FFE711'
                            }
                        }
                    ]
                };
                myChart.setOption(option)
            },
            cityLin() {
                let myChart = this.$echarts.init(document.getElementById('cityLin'));
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
                        data: ['成都', '重庆', '杭州', '北京', '深圳', '广州', '上海'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            data: [45, 52, 76, 89, 116, 122, 134],
                            itemStyle: {
                                color: '#FFE711'
                            }
                        }
                    ]
                };
                myChart.setOption(option)
            }
        }
    };
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

    .all {
        /*background: linear-gradient(360deg, rgba(10, 32, 46, 1) 0%, rgba(1, 15, 106, 1) 100%);*/
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
                height: 200px;
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
                padding-top: 30px;
                padding-right: 30px;
                width: 100%;
                text-align: center;
                margin-top: 5px;

                > div {
                    border: 1px solid #19FF9B;
                    width: 48%;

                    p {
                        border-bottom: 1px solid #19FF9B;
                        height: 22px;
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
