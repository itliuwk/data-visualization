<template>
    <div class="conversion-content">
        <div class="funnel">
            <div id="funnel"></div>
            <div class="line">
                <img src="../../assets/images/line.png" alt="">
                <div class="conversionRate">
                    <div>
                        <p>下单转换率</p>
                        <p>85.24%</p>
                    </div>
                    <div>
                        <p>付款转化率</p>
                        <p>56.18%</p>
                    </div>
                </div>
                <div class="deal">
                    <p>成交转化率</p>
                    <p>75.91%</p>
                </div>
            </div>
        </div>
        <div class="use">
            <div class="use-info">
                <p>累计使用积分</p>
                <p>1000000</p>
                <p>等价于：10000元</p>
                <p>=10000KG垃圾</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "conversion",
        data() {
            return {
                msg: "转换率"
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('funnel'));

                let option = {
                    title: {
                        text: '累计转换率',
                        subtext: '',
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        },
                        left: 10
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}"
                    },
                    series: [
                        {
                            name: '',
                            type: 'funnel',
                            left: '10%',
                            top: 30,
                            fontSize: 10,
                            bottom: 10,
                            width: '100%',
                            min: 0,
                            max: 80,
                            sort: 'descending',
                            gap: 2,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            labelLine: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            emphasis: {
                                label: {
                                    fontSize: 20
                                }
                            },
                            data: [
                                {
                                    value: 60, name: '访问', itemStyle: {color: '#FFD400'}
                                },
                                {value: 40, name: '咨询', itemStyle: {color: '#22A6FF'}},
                                {value: 20, name: '订单', itemStyle: {color: '#FF7F00'}}
                            ]
                        }
                    ]
                };

                myChart.setOption(option)

            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .conversion-content {
        padding: 10px;
        display: flex;
        height: 100%;

        > div {
            flex: 1;
        }

        #funnel {
            width: 200px;
            height: 150px;
            z-index: 2;
        }

        .funnel {

            .line {
                position: relative;
                top: -112px;
                left: 132px;
                display: inline-block;

                img {
                    width: 90%;
                }
            }

        }


        .use {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 70px;
        }

        .use-info {
            margin-left: 50px;
            color: #fff;
            display: inline-block;
            padding: 5px 20px;
            background: #11d6ff;
            border-radius: 8px;
            vertical-align: middle;
            text-align: center;
        }


        .conversionRate {
            font-size: 10px;
            position: relative;
            top: -107px;
            left: -27px;
            color: #fff;

            div {
                position: relative;
                top: 22px;
                left: 92px;
                display: inline-block;

                p {
                    font-size: 10px;
                }
            }

            div:nth-child(2) {
                top: 63px;
                left: 7px;
            }
        }

        .deal {
            position: relative;
            display: inline-block;
            top: -87px;
            left: 125px;
            color: #fff;
            font-size: 12px;
        }
    }
</style>
