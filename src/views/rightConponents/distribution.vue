<template>
    <div class="distribution-content">
        <p>{{allParams.city}}设备分布</p>
        <div id="chartsBar"></div>
    </div>
</template>

<script>
    import {get_locationDevices} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],
    export default {
        name: "distribution",
        data() {
            return {
                msg: "分布"
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('chartsBar'));
                get_locationDevices(this.allParams).then(res => {
                    let locationNames = [], rubbishs = [], pickups = [];
                    res.map(item => {
                        locationNames.push(item.locationName);
                        rubbishs.push(item.rubbish);
                        pickups.push(item.pickup);
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
                            data: locationNames,
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
                                data:rubbishs,
                                itemStyle: {
                                    color: '#FFE711'
                                }
                            },
                            {
                                name: '取货机',
                                type: 'bar',
                                data: pickups,
                                itemStyle: {
                                    color: '#11D6FF'
                                }
                            }
                        ]
                    };

                    myChart.setOption(option,true)

                });

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
