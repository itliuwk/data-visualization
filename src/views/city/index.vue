<template>
    <div>
        <div class="content">
            <div class="left">
                <div class="partake">
                    <Partake :loadData="loadData"></Partake>
                </div>
                <div class="pie-chart">
                    <PieChart  :loadData="loadData"></PieChart>
                </div>
                <div class="community">
                    <Community  :loadData="loadData"></Community>
                </div>
            </div>
            <div class="midden">
                <Map :location="location"  :loadSetInterval="loadData"></Map>
                <ImplementChart  :loadData="loadData"></ImplementChart>
                <ExchangeChart  :loadData="loadData"></ExchangeChart>
            </div>
            <div class="right">
                <div class="distribution">
                    <Distribution  :loadData="loadData"></Distribution>
                </div>
                <div class="monitor">
                    <Monitor  :loadData="loadData"></Monitor>
                </div>
                <div class="conversion">
                    <Conversion  :loadData="loadData"></Conversion>
                </div>
                <div class="statistics">
                    <Statistics  :loadData="loadData"></Statistics>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Partake from '../leftConponents/partake'
    import PieChart from '../leftConponents/pieChart'
    import Community from '../leftConponents/community'


    import Map from '../map/index'
    import ImplementChart from '../map/implementChart'
    import ExchangeChart from '../map/exchangeChart'

    import Distribution from '../rightConponents/distribution'
    import Monitor from '../rightConponents/monitor'
    import Conversion from '../rightConponents/conversion'
    import Statistics from '../rightConponents/statistics'

    import Alert from '@/utils/message'

    export default {
        name: "index",
        data() {
            return {
                msg: "index"
            }
        },
        mounted() {

        },
        props: {
            location: {
                type: Array
            },
            loadData: {}
        },
        components: {
            Partake,
            PieChart,
            Community,
            Distribution,
            Monitor,
            Conversion,
            Statistics,
            Map,
            ImplementChart,
            ExchangeChart,
        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
</style>
