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
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
                },{
                    name:'小区名称1',
                    num:1000,
                    quality:200,
                    proportion:40
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
