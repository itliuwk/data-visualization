<template>
    <div class="page">
        <div class="title">
            酷抓
        </div>
        <div class="content">
            <div class="left">
                <div class="partake">
                    <Partake></Partake>
                </div>
                <div class="pie-chart">
                    <PieChart></PieChart>
                </div>
                <div class="community">
                    <Community></Community>
                </div>
            </div>
            <div class="midden">2</div>
            <div class="right">
                <div class="distribution">
                    <Distribution></Distribution>
                </div>
                <div class="monitor">
                    <Monitor></Monitor>
                </div>
                <div class="conversion">
                    <Conversion></Conversion>
                </div>
                <div class="statistics">
                    <Statistics></Statistics>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Partake from './leftConponents/partake'
    import PieChart from './leftConponents/pieChart'
    import Community from './leftConponents/community'

    import Distribution from './rightConponents/distribution'
    import Monitor from './rightConponents/monitor'
    import Conversion from './rightConponents/conversion'
    import Statistics from './rightConponents/statistics'

    export default {
        name: "index",
        data() {
            return {
                msg: "index"
            }
        },
        components: {
            Partake,
            PieChart,
            Community,
            Distribution,
            Monitor,
            Conversion,
            Statistics
        },
        mounted() {

        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .page {
        width: 100vw;
        height: 100vh;
        background: #3755CB;

        .title {
            height: 60px;
            text-align: center;
            line-height: 60px;
            font-size: 30px;
            color: #fff;
        }

        .content {
            height: calc(100vh - 60px);
            width: 100%;
            display: flex;
            padding: 20px;

            > div {
                flex: 1;
            }

            > div:nth-child(1) {
                flex: 1.2;
            }

            > div:nth-child(2) {
                flex: 3;
                margin: 0 15px;
            }

            > div:nth-child(3) {
                flex: 1.5;
            }

            .left {
                > div {
                    background: #2F3571;
                    margin-bottom: 15px;
                }

                .partake {
                    height: 305px;
                }

                .pie-chart {
                    min-height: 235px;
                }

                .community {
                    height: calc(100% - 570px);
                }
            }

            .midden {
                background: #2F3571;
            }


            .right {
                > div {
                    background: #2F3571;
                    margin-bottom: 15px;
                }

                .distribution {
                    min-height: 220px;
                }

                .monitor {
                    min-height: 210px;
                }

                .conversion {
                    height: 170px;
                }

                .statistics {
                    height: calc(100% - 645px);
                }

                > div:nth-child {
                    margin: 0;
                }
            }
        }
    }
</style>
