<template>
    <div class="page">
        <div class="title">
            <img src="../assets/images/kuzhua.png" alt="">
            <div class="distpicker">
                <v-distpicker  @province="province" @city="city" hide-area @area="area" :placeholders="{province: '全国', city: '市', area: '区'
                }" :province="select.province" :city="select.city"></v-distpicker>
                <p>查看</p>
            </div>
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
            <div class="midden">
                <Map></Map>
                <ImplementChart></ImplementChart>
                <ExchangeChart></ExchangeChart>
            </div>
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


    import Map from './map/index'
    import ImplementChart from './map/implementChart'
    import ExchangeChart from './map/exchangeChart'

    import Distribution from './rightConponents/distribution'
    import Monitor from './rightConponents/monitor'
    import Conversion from './rightConponents/conversion'
    import Statistics from './rightConponents/statistics'

    import VDistpicker from 'v-distpicker'

    export default {
        name: "index",
        data() {
            return {
                msg: "index",
                select: { province: '广东省', city: '广州市' },
            }
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
            VDistpicker
        },
        mounted() {

        },
        methods: {
            province(data) {
                console.log(data)
            },
            city(data) {
                console.log(data)
            },
            area(data) {
                console.log(data)
            },
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .page {
        width: 100vw;
        height: 100vh;
        background: #3755CB;

        .title {
            height: 60px;
            font-size: 30px;
            text-align: center;
            color: #fff;
            position: relative;

            img {
                height: 70px;
            }

            .distpicker {
                position: absolute;
                top: 18px;
                right: 20px;
                display: inline-block;

                /deep/ .distpicker-address-wrapper {
                    display: inline-block;
                }

                p {
                    font-size: 15px;
                    display: inline-block;
                    cursor: pointer;
                    padding: 10px 20px;
                    text-align: center;
                    background: #2F3571;
                    border-radius: 4px;
                    margin: 0 10px;
                }
            }
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
