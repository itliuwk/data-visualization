<template>
    <div class="implement-content">
        <p>广州各区分类部署实施效益折线图</p>
        <div id="implementLine"></div>
    </div>
</template>

<script>
    export default {
        name: "implementChart",
        data() {
            return {
                msg: "implementChart"
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('implementLine'));
                let option = {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['番禺', '天河', '海珠', '越秀', '荔湾'],
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
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                        name: '累计分类投放质量（KG）',
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
                            name: '番禺',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210],
                            itemStyle: {
                                color: '#FFE711'
                            }
                        },
                        {
                            name: '天河',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310],
                            itemStyle: {
                                color: '#11D6FF'
                            }
                        },
                        {
                            name: '海珠',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '越秀',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '荔湾',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };


                myChart.setOption(option)
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
