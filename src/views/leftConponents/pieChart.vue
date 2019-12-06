<template>
    <div class="pieChart-content">
        <div class="btn">
            <p>垃圾发布实时数据</p>
            <p>垃圾投放扩展数据</p>
        </div>
        <div id="chartsBin"></div>
    </div>
</template>

<script>
    export default {
        name: "pieChart",
        data() {
            return {
                msg: "pieChart"
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                let myChart = this.$echarts.init(document.getElementById('chartsBin'));

                let option = {
                    title: {
                        text: '',
                        subtext: '',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        bottom: 0,
                        width: 340,
                        left: 30,
                        data: ['干垃圾', '湿垃圾', '有害垃圾', '可回收垃圾']
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '50%'],
                            selectedMode: 'single',
                            data: [
                                {value: 535, name: '干垃圾'},
                                {value: 510, name: '湿垃圾'},
                                {value: 634, name: '有害垃圾'},
                                {value: 735, name: '可回收垃圾'}
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

                myChart.setOption(option);
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
    }
</style>
