<template>
    <div class="partake-content">
        <div>
            <p>逐步环保投入参与人数</p>
            <div class="num">
                <template v-for="item in partake.partake.num">
                    <span :class="item!=','?'color':''"> {{item}}</span>

                </template>
                <span>人</span>
            </div>
            <div class="info">
                <p>上月添加：{{partake.partake.add}} 人</p>
                <p>每月增涨：{{partake.partake.increase}} %</p>
            </div>
        </div>
        <div style="margin: 15px 0">
            <p>逐步垃圾分类投放质量</p>
            <div class="num">
                <template v-for="item in partake.putIn.num">
                    <span :class="item!=','?'color':''"> {{item}}</span>
                </template>
                <span>公斤</span>
            </div>
            <div class="info">
                <p>上月添加：{{partake.putIn.add}} 人</p>
                <p>每月增涨：{{partake.putIn.increase}} %</p>
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
                <p>上月添加：{{partake.order.add}} 人</p>
                <p>每月增涨：{{partake.order.increase}} %</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {toThousands} from '@/utils/index'
    export default {
        name: "partake",
        data() {
            return {
                msg: "partake",
                partake: {
                    partake:{},
                    putIn:{},
                    order:{},
                }
            }
        },
        mounted() {
            this.get_detail();
        },
        methods: {
            get_detail() {
                let partake = {
                    partake: {
                        num: toThousands(656351644),
                        add: 515,
                        increase: 63
                    },
                    putIn: {
                        num: toThousands(826351324),
                        add: 45,
                        increase: 33
                    },
                    order: {
                        num: toThousands(153592501),
                        add: 123,
                        increase: 45
                    }
                };

                this.partake = partake;

            },
            toThousands(num) {
                let result = [], counter = 0;
                num = (num || 0).toString().split('');
                for (let i = num.length - 1; i >= 0; i--) {
                    counter++;
                    result.unshift(num[i]);
                    if (!(counter % 3) && i != 0) {
                        result.unshift(',');
                    }
                }
                return result.join('');
            }
        },
        filters: {}
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
