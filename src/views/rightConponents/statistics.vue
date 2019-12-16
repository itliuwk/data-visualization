<template>
    <div class="statistics-content">
        <p>广州市积分兑换订单统计</p>
        <div class="table">
            <div>
                <p>累计订单量</p>
                <p>{{detail.order||0}}</p>
            </div>
            <div>
                <p>订单预算</p>
                <p>{{detail.amount||0}}</p>
            </div>
            <div>
                <p>成本</p>
                <p>{{detail.cost||0}}</p>
            </div>
            <div>
                <p>收益</p>
                <p>{{detail.profit||0}}</p>
            </div>
        </div>
        <div class="info">
            <div>
                <!--                <div>-->
                <!--                    <p>上月订单数：1664</p>-->
                <!--                    <p>环比增涨 10％</p>-->
                <!--                </div>-->
                <div style="margin-top: 10px;">
                    <p>上月订单收益：{{detail.lastMonthProfit}}</p>
                    <p>环比增涨： {{detail.monthBeforeLastMonthProfit|toRate2}}</p>
                </div>
            </div>
            <div>
                <div>
                    <span>成交量最高小区：</span>
                    <span>{{detail.location}}</span>
                </div>
                <div style="margin: 10px 0">
                    <span>成交量最高商品：</span>
                    <span>{{detail.product}}</span>
                </div>
                <!--                <div>-->
                <!--                    <span>搜索量最高商品：</span>-->
                <!--                    <span>{{detail.product}}</span>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import {get_cityOrderSummary} from '@/api/index'
    import mixins from "@/mixins/index.js";
    //        mixins: [mixins],
    export default {
        name: "statistics",
        data() {
            return {
                msg: "统计",
                detail: {}
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                get_cityOrderSummary(this.allParams).then(res => {
                    res.monthBeforeLastMonthProfit ? (res.lastMonthProfit - res.monthBeforeLastMonthProfit) / res.monthBeforeLastMonthProfit : '-';
                    this.detail = res;
                })
            }
        },
        filters: {
            toRate2(num) {
                if (num === '-' || num == undefined) {
                    return '-'
                } else {
                    num = num * 100;
                    if (Math.floor(num) === num) {
                        return num + '%'
                    } else {
                        return num.toFixed(2) + "%"
                    }
                }
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .statistics-content {
        padding: 10px;
        color: #fff;
        font-size: 14px;

        .table {
            display: flex;
            padding: 0 10px;
            text-align: center;
            margin-top: 5px;

            > div {
                flex: 1;
                border-left: 1px solid rgba(255, 255, 255, 1);
                border-top: 1px solid rgba(255, 255, 255, 1);
                border-bottom: 1px solid rgba(255, 255, 255, 1);

                p {
                    margin: 5px 0;
                }

                p:nth-child(2) {
                    border-top: 1px solid rgba(255, 255, 255, 1);
                    color: rgba(255, 212, 0, 1);
                    padding-top: 5px;
                }
            }

            > div:last-child {
                border-right: 1px solid rgba(255, 255, 255, 1);
            }
        }

        .info {
            display: flex;
            margin-top: 10px;

            > div {
                padding: 0 10px;
                flex: 1;

                p:nth-child(2) {
                    color: #FFE710;
                }

                span:nth-child(2) {
                    color: #FFE710;
                    margin-left: 30px;
                }
            }
        }
    }
</style>
