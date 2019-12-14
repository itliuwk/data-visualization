<template>
    <div class="monitor-content">
        <div class="charts">
            <div>
                <p>垃圾箱满溢监控</p>
                <div id="overflowPie"></div>
            </div>
            <div>
                <p>垃圾箱运维监控</p>
                <div id="dustbinDevOpsPie"></div>
            </div>
            <div>
                <p>取货机运维监控</p>
                <div id="pickDevOpsPie"></div>
            </div>
        </div>
        <div class="info">
            <div>
                <p>故障机</p>
                <p>垃圾箱：{{detail.badRubbish||0}}台</p>
                <p>取货机：{{detail.badPickup||0}}台</p>
            </div>
            <div>
                <p>剩余备用</p>
                <p>垃圾箱：{{detail.usableRubbish||0}}台</p>
                <p>取货机：{{detail.usablePickup ||0}}台</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {get_deviceState} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],
    export default {
        name: "partake",
        data() {
            return {
                msg: "监控",
                detail: {}
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                get_deviceState(this.allParams).then(res => {
                    this.detail = res;
                    this.overflowPie();
                    this.dustbinDevOpsPie();
                    this.pickDevOpsPie();
                });

            },
            overflowPie() {
                let myChart = this.$echarts.init(document.getElementById('overflowPie'));
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
                        data: ["未满溢", "满溢"],
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
                                    value: this.detail.available, name: '未满溢', itemStyle: {
                                        color: '#FFD400'
                                    }
                                },
                                {
                                    value: this.detail.full, name: '满溢', itemStyle: {
                                        color: '#FF7F00'
                                    }
                                }
                            ]
                        }
                    ]
                };
                myChart.setOption(option)
            },
            dustbinDevOpsPie() {
                let myChart = this.$echarts.init(document.getElementById('dustbinDevOpsPie'));
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
                        data: ["在线", "离线"],
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
                                    value: this.detail.rubbishOnLine, name: '在线', itemStyle: {
                                        color: '#22A6FF'
                                    }
                                },
                                {
                                    value: this.detail.rubbishOffLine, name: '离线', itemStyle: {
                                        color: '#FF7F00'
                                    }
                                }
                            ]
                        }
                    ]
                };
                myChart.setOption(option)
            },
            pickDevOpsPie() {
                let myChart = this.$echarts.init(document.getElementById('pickDevOpsPie'));
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
                        data: ["在线", "离线"],
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
                                    value: this.detail.pickupOnLine, name: '在线', itemStyle: {
                                        color: '#FFD400'
                                    }
                                },
                                {
                                    value: this.detail.pickupOffLine, name: '离线', itemStyle: {
                                        color: '#FF7F00'
                                    }
                                }
                            ]
                        }
                    ]
                };
                myChart.setOption(option)
            },
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .monitor-content {
        padding: 10px;

        .charts {
            display: flex;
            text-align: center;
            font-size: 12px;

            > div {
                flex: 1;
                color: #fff;

                > div {
                    width: 100%;
                    height: 100px;
                }
            }
        }

        .info {
            display: flex;
            text-align: center;
            padding: 0 50px;
            margin-top: 10px;

            > div {
                flex: 1;
                padding: 2px;
                font-size: 14px;
                color: #fff;
                width: 191px;
                background: rgba(17, 214, 255, 1);
                opacity: 1;
                border-radius: 8px;
            }

            > div:nth-child(1) {
                margin-right: 20px;
            }
        }
    }
</style>
