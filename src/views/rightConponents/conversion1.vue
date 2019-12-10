<template>
    <div class="conversion-content">
        <p>累计转换率</p>
        <div class="info">
            <img src="../../assets/images/funnel.png" alt="">
            <div>
                <div class="info-text">
                    <span>浏览</span>
                    <span>下单</span>
                    <span>付款</span>
                </div>
                <div class="conversionRate">
                    <div>
                        <p>下单转换率</p>
                        <p>85.24%</p>
                    </div>
                    <div>
                        <p>付款转化率</p>
                        <p>56.18%</p>
                    </div>
                </div>
                <div class="deal">
                    <p>成交转化率</p>
                    <p>75.91%</p>
                </div>
            </div>
        </div>
        <div class="use-info">
            <p>累计使用积分</p>
            <p>1000000</p>
            <p>等价于：10000元</p>
            <p>=10000KG垃圾</p>
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
            position: relative;
            margin-top: 10px;
            width: 50%;
            display: inline-block;
            vertical-align: middle;

            img {
                width: 90%;
            }

            > div {
                position: absolute;
                top: 0;
                left: 0;

                .info-text {
                    display: inline-block;

                    span {
                        position: relative;
                        left: 55px;

                        font-size: 10px;
                        color: #fff;
                    }

                    span:nth-child(1) {
                        top: -4px;
                    }

                    span:nth-child(2) {
                        top: 34px;
                        left: 32px;
                    }

                    span:nth-child(3) {
                        top: 70px;
                        left: 10px;
                    }
                }

                .conversionRate {
                    font-size: 10px;
                    position: relative;
                    top: 0;
                    left: -18px;
                    display: inline-block;

                    div {
                        position: relative;
                        top: 22px;
                        left: 92px;
                        display: inline-block;

                        p {
                            font-size: 10px;
                        }
                    }

                    div:nth-child(2) {
                        top: 63px;
                        left: 7px;
                    }
                }

                .deal {
                    position: relative;
                    display: inline-block;
                    top: 10px;
                    left: 215px;
                }

            }
        }

        .use-info {
            margin-left: 50px;
            color: #fff;
            display: inline-block;
            padding: 5px 20px;
            background: #11d6ff;
            border-radius: 8px;
            vertical-align: middle;
            text-align: center;
        }
    }
</style>
