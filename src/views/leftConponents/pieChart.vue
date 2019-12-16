<template>
    <div class="pieChart-content">
        <div class="btn">
            <p @click="today">垃圾投放实时数据</p>
            <p @click="allThrow">垃圾投放累计数据</p>
        </div>
        <div id="chartsBin"></div>
    </div>
</template>

<script>
    import {get_todayThrow, get_allThrow} from '@/api/index'
    import mixins from "@/mixins/index.js";

    export default {
        name: "pieChart",
        data() {
            return {
                msg: "pieChart",
                tab: 1
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('chartsBin'));

                if (this.tab == 1) {
                    get_todayThrow(this.allParams).then(res => {
                        myChart.clear();
                        let option = {
                            title: {
                                text: '',
                                subtext: '',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: " <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                bottom: 0,
                                width: 340,
                                left: 30,
                                data: ['干垃圾', '湿垃圾', '有害垃圾', '可回收垃圾'],
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            series: [
                                {
                                    type: 'pie',
                                    radius: '50%',
                                    center: ['50%', '50%'],
                                    selectedMode: 'single',
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

                        myChart.setOption(option,true);
                    });
                } else if (this.tab == 2) {
                    get_allThrow(this.allParams).then(res => {
                        myChart.clear();
                        let option = {
                            title: {
                                text: '',
                                subtext: '',
                                left: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: " <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                bottom: 0,
                                width: 340,
                                left: 30,
                                data: ['干垃圾', '湿垃圾', '有害垃圾', '可回收垃圾'],
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            series: [
                                {
                                    type: 'pie',
                                    radius: '50%',
                                    center: ['50%', '50%'],
                                    selectedMode: 'single',
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

                        myChart.setOption(option,true);
                    });
                }
            },
            today() {
                this.tab = 1;
                this.init();
            },
            allThrow() {
                this.tab = 2;
                this.init();
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>

    .pieChart-content {
        padding-top: 15px;
        font-size: 14px;
    }

    #chartsBin {
        width: 100%;
        height: 180px;
    }


    .btn {
        text-align: center;

        p {
            cursor: pointer;
            display: inline-block;
            width: 134px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            background: rgba(255, 208, 20, 1);
            border-radius: 8px;
            margin: 0 10px;
        }

        p:hover {
            background: rgba(255, 208, 20, .85);
            transition-duration: .5s;
        }
    }
</style>
