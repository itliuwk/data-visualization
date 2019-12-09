<template>
    <div class="conversion-content">
        <p>逐步转换率</p>
        <div class="info">
            <img src="../../assets/images/funnel.png" alt="">
            <div>
                <div class="info-text">
                    <p>浏览</p>
                    <p>下单</p>
                    <p>付款</p>
                </div>
                <div class="conversionRate">
                    <div>
                        <p>下单转换率</p>
                        <p>4.24%</p>
                    </div>
                    <div>
                        <p>付款转化率</p>
                        <p>4.24%</p>
                    </div>
                </div>
                <div class="deal">
                    <p>成交转化率</p>
                    <p>2.91%</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "conversion",
        data() {
            return {
                msg: "转换率"
            }
        },
        mounted() {

        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .conversion-content {
        padding: 10px;

        p {
            color: #fff;
            font-size: 14px;
        }

        .info {
            text-align: center;
            position: relative;

            img {
                width: 45%;
            }

            > div {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                .info-text {
                    p {
                        position: relative;
                        left: -43px;
                        font-size: 10px;
                    }

                    p:nth-child(1) {
                        top: 10px;
                    }

                    p:nth-child(2) {
                        top: 30px;
                    }

                    p:nth-child(3) {
                        top: 50px;
                    }
                }

                .conversionRate {
                    font-size: 10px;
                    position: relative;
                    top: -20px;
                    left: 54px;
                    display: inline-block;

                    div {
                        position: relative;
                        top: -7px;
                        left: 74px;
                        display: inline-block;

                        p {
                            font-size: 10px;
                        }
                    }

                    div:nth-child(2) {
                        top: 36px;
                        left: -12px;
                    }
                }

                .deal {
                    position: relative;
                    display: inline-block;
                    top: 0;
                    left: 80px;
                }

            }
        }
    }
</style>
