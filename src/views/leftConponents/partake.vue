<template>
    <div class="partake-content">
        <div>
            <p>累计环保投入参与人数</p>
            <div class="num">
                <template v-for="item in partake.customer.num">
                    <span :class="item!=','?'color':''"> {{item}}</span>

                </template>
                <span>人</span>
            </div>
            <div class="info">
                <p>上月添加：{{partake.customer.add||0}} 人</p>
                <p>环比增涨：{{partake.customer.increase| toRate2}}</p>
            </div>
        </div>
        <div style="margin: 15px 0">
            <p>累计垃圾分类投放质量</p>
            <div class="num">
                <template v-for="item in partake.rubbish.num">
                    <span :class="item!=','?'color':''"> {{item}}</span>
                </template>
                <span>公斤</span>
            </div>
            <div class="info">
                <p>上月添加：{{partake.rubbish.add||0}} 公斤</p>
                <p>环比增涨：{{partake.rubbish.increase| toRate2}}</p>
            </div>
        </div>
        <div>
            <p>累计垃圾兑换订单量</p>
            <div class="num">
                <template v-for="item in partake.order.num">
                    <span :class="item!=','?'color':''"> {{item}}</span>
                </template>
                <span>个</span>
            </div>
            <div class="info">
                <p>上月添加：{{partake.order.add||0}} 个</p>
                <p>环比增涨：{{partake.order.increase| toRate2}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {toThousands} from '@/utils/index'
    import {get_allSum, get_allLinkRelative} from '@/api/index'
    import mixins from "@/mixins/index.js";

    export default {
        name: "partake",
        data() {
            return {
                msg: "partake",
                partake: {
                    customer: {},
                    rubbish: {},
                    order: {},
                }
            }
        },
        mixins: [mixins],

        methods: {
            init() {
                get_allSum(this.allParams).then(res => {
                    get_allLinkRelative(this.$store.state.allParams).then(response => {
                        let params = {
                            customer: {
                                num: toThousands(res.customer),
                                add: response.lasetMonth,
                                increase: response.customer.monthBeforeLastMonth ? (res.customer.lastMonth - response.customer.monthBeforeLastMonth) / response.customer.monthBeforeLastMonth : '-'
                            },
                            rubbish: {
                                num: toThousands(res.rubbish),
                                add: response.rubbish.lasetMonth,
                                increase: response.rubbish.monthBeforeLastMonth ? (res.rubbish.lastMonth - response.rubbish.monthBeforeLastMonth) / response.rubbish.monthBeforeLastMonth : '-'
                            },
                            order: {
                                num: toThousands(res.order),
                                add: response.lasetMonth,
                                increase: response.order.monthBeforeLastMonth ? (res.order.lastMonth - response.order.monthBeforeLastMonth) / response.order.monthBeforeLastMonth : '-'
                            }
                        };
                        this.partake = params;
                    })
                });

            }
        },
        filters: {
            toRate2(num) {
                if (num === '-') {
                    return num
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
    .partake-content {
        width: 100%;
        height: 100%;
        padding: 15px;
        color: #fff;
        font-size: 12px;


        .info {
            display: flex;

            p {
                flex: 1;
            }
        }

        .num {
            margin: 10px 0;
        }

        .color {
            display: inline-block;
            width: 20px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: yellow;
            color: #000;
            font-weight: bold;
            margin: 0 3px;
        }
    }
</style>
