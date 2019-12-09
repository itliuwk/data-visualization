<template>
    <div class="statistics-content">
        <p>广州市积分兑换订单统计</p>
        <div class="table">
            <div>
                <p>累计订单量</p>
                <p>6315</p>
            </div>
            <div>
                <p>订单预算</p>
                <p>5661</p>
            </div>
            <div>
                <p>成本</p>
                <p>563</p>
            </div>
            <div>
                <p>收益</p>
                <p>9632</p>
            </div>
        </div>
        <div class="info">
            <div>
                <div>
                    <p>上月订单数每年增长 10％</p>
                    <p>环比增长 10％</p>
                </div>
                <div style="margin-top: 10px;">
                    <p>上月订单收益每年增长 15％</p>
                    <p>环比增长 18％</p>
                </div>
            </div>
            <div>
                <div>
                    <span>成交量最高小区：</span>
                    <span>越秀滨海新城</span>
                </div>
                <div style="margin: 10px 0">
                    <span>成交量最高商品：</span>
                    <span>泡面</span>
                </div>
                <div>
                    <span>搜索量最高商品：</span>
                    <span>情趣用品</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "statistics",
        data() {
            return {
                msg: "统计"
            }
        },
        mounted() {

        },
        methods: {}
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
            >div:last-child{
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
