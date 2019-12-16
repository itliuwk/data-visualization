<template>
    <div class="exchangeChart-content">
        <p>广州积分兑换统计面积图</p>
        <div id="exchangeLine"></div>
    </div>
</template>

<script>
    import {get_orderTrend} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],
    export default {
        name: "exchangeChart",
        data() {
            return {
                msg: "exchangeChart"
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('exchangeLine'));
                get_orderTrend(this.allParams).then(res => {
                    let cost = [], credit = [], profit = [];
                    res.map(item => {
                        cost.push(item.cost);
                        credit.push(item.credit);
                        profit.push(item.profit);
                        return item;
                    });
                    myChart.clear();
                    let option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['成本', '积分抵扣额', '利润'],
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
                                name: '成本',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {},
                                data: cost,
                                itemStyle: {
                                    color: '#59DD01'
                                }
                            },
                            {
                                name: '积分抵扣额',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {},
                                data: credit,
                                itemStyle: {
                                    color: '#2A9F67'
                                }
                            },
                            {
                                name: '利润',
                                type: 'line',
                                stack: '总量',
                                areaStyle: {normal: {}},
                                data: profit,
                                itemStyle: {
                                    color: '#6F99C6'
                                }
                            }
                        ]
                    };


                    myChart.setOption(option, true)
                });

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
