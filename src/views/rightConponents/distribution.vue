<template>
    <div class="distribution-content">
        <p>广州市设备分布</p>
        <div id="chartsBar"></div>
    </div>
</template>

<script>
    export default {
        name: "distribution",
        data() {
            return {
                msg: "分布"
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('chartsBar'));
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
                    legend: {
                        data: ['垃圾箱', '取货机'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    grid: {
                        top: '15%',
                        left: '5%',
                        right: '5%',
                        bottom: '5%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['科慧花园', '广州亚运城', '万科幸福誉', '祈福黄金海岸', '南沙保利城', '瑞万璞悦里', '万科桃源里', '云溪四季'],
                        nameTextStyle: {
                            color: '#fff'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }

                        },
                        axisLabel: {
                            interval: 0,
                            fontSize: 8,
                            rotate: -30
                        }

                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        nameTextStyle: {
                            color: '#fff'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    series: [
                        {
                            name: '垃圾箱',
                            type: 'bar',
                            data: [54, 12, 55, 167, 23, 65, 45, 23],
                            itemStyle: {
                                color: '#FFE711'
                            }
                        },
                        {
                            name: '取货机',
                            type: 'bar',
                            data: [56, 43, 32, 87, 34, 54, 32, 67],
                            itemStyle: {
                                color: '#11D6FF'
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
    .distribution-content {
        padding: 10px;
        font-size: 14px;
        color: #fff;


        #chartsBar {
            width: 100%;
            height: 180px;
        }

    }
</style>
