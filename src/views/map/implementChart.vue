<template>
    <div class="implement-content">
        <p>广州各区分类部署实施效益折线图</p>
        <div id="implementLine"></div>
    </div>
</template>

<script>
    import {get_districtThrowDiagram} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],
    export default {
        name: "implementChart",
        data() {
            return {
                msg: "implementChart"
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('implementLine'));
                get_districtThrowDiagram(this.allParams).then(res => {
                    let legendData = [], seriesData = [];
                    res.map(item => {
                        legendData.push(item.district);
                        seriesData.push({
                            name: item.district,
                            type: 'line',
                            stack: '总量',
                            data: item.weight
                        });
                        return item;
                    });


                    let option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: legendData,
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
                        xAxis: {
                            name: '月',
                            type: 'category',
                            boundaryGap: false,
                            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',],
                            nameTextStyle: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            offset: -10,
                            left: '3%',
                            name: '累计投放质量（KG）',
                            nameTextStyle: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        series: seriesData
                    };


                    myChart.setOption(option)
                });

            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    .implement-content {
        p {
            font-weight: bold;
            color: #fff;
            font-size: 12px;
            padding: 10px 0 0 10px;
        }
    }

    #implementLine {
        width: 100%;
        height: 220px;
    }
</style>
