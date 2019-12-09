<template>
    <div class="community-content">
        <p class="title">社区投放排名</p>
        <div class="table-header">
            <p>社区名称</p>
            <p>参与人数</p>
            <p>总投放质量</p>
            <p>可回收占比</p>
        </div>
        <div class="table-content" v-for="(item,index) in table" :key="index">
            <p>{{item.name}}</p>
            <p class="color">{{item.num}}</p>
            <p class="color">{{item.quality}}</p>
            <p class="color">{{item.proportion}}%</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "community",
        data() {
            return {
                msg: "community",
                table: [
                    {
                        name: '科慧花园',
                        num: 654,
                        quality: 234,
                        proportion: 32
                    }, {
                        name: '广州亚运城',
                        num: 654,
                        quality: 345,
                        proportion: 33
                    }, {
                        name: '万科幸福誉',
                        num: 456,
                        quality: 234,
                        proportion: 74
                    }, {
                        name: '祈福黄金海岸',
                        num: 575,
                        quality: 234,
                        proportion: 42
                    }, {
                        name: '南沙保利城',
                        num: 456,
                        quality: 907,
                        proportion: 23
                    }, {
                        name: '瑞万璞悦里',
                        num: 564,
                        quality: 544,
                        proportion: 63
                    }, {
                        name: '万科桃源里',
                        num: 654,
                        quality: 256,
                        proportion: 13
                    }, {
                        name: '合景誉山国际',
                        num: 416,
                        quality: 214,
                        proportion: 75
                    }, {
                        name: '云溪四季',
                        num: 641,
                        quality: 521,
                        proportion: 25
                    }, {
                        name: '越秀滨海新城',
                        num: 672,
                        quality: 523,
                        proportion: 56
                    },]
            }
        },
        mounted() {

        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .community-content {
        padding: 10px;

        .title {
            width: 90px;
            height: 21px;
            font-size: 15px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 21px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
        }

        .table-header, .table-content {
            margin-top: 5px;
            display: flex;
            font-size: 12px;

            p {
                flex: 1;
                color: #fff;
                text-align: center;
            }

            .color {
                color: #59DF00;

            }
        }

        .table-content {
            margin-bottom: 5px;
        }
    }
</style>
