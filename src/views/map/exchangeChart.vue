<template>
    <div class="exchangeChart-content">
        <p>广州积分兑换统计面积图</p>
        <div id="exchangeLine"></div>
    </div>
</template>

<script>
    export default {
        name: "exchangeChart",
        data() {
            return {
                msg: "exchangeChart"
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('exchangeLine'));
                let option = {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['总额', '成本', '积分抵扣额', '利润'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            name: '月',
                            type: 'category',
                            boundaryGap: false,
                            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                            nameTextStyle: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: '元',
                            type: 'value',
                            nameTextStyle: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: '总额',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [120, 132, 101, 134, 90, 230, 210, 51, 65, 145, 651, 963],
                            itemStyle: {
                                color: '#11D6FF'
                            }
                        },
                        {
                            name: '成本',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [220, 182, 191, 234, 290, 330, 310, 96, 54, 69, 654, 98],
                            itemStyle: {
                                color: '#59DD01'
                            }
                        },
                        {
                            name: '积分抵扣额',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [150, 232, 201, 154, 190, 330, 410, 89, 125, 156, 654, 987],
                            itemStyle: {
                                color: '#2A9F67'
                            }
                        },
                        {
                            name: '利润',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data: [320, 332, 301, 334, 390, 330, 320, 652, 452, 321, 658, 125],
                            itemStyle: {
                                color: '#6F99C6'
                            }
                        }
                    ]
                };


                myChart.setOption(option)
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .exchangeChart-content {
        margin-top: 20px;

        p {
            padding: 10px 0 0 10px;
            font-weight: bold;
            color: #fff;
            font-size: 12px;
        }
    }

    #exchangeLine {
        width: 100%;
        height: 200px;
    }
</style>
