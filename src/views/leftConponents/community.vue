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
            <p class="locationName" :title="item.locationName">{{item.locationName}}</p>
            <p class="color">{{item.customer}}</p>
            <p class="color">{{item.weight}}</p>
            <p class="color">{{item.recycle}}%</p>
        </div>
    </div>
</template>

<script>
    import {get_locationThrowRank} from '@/api/index'
    import mixins from "@/mixins/index.js";

    export default {
        name: "community",
        data() {
            return {
                msg: "community",
                table: []
            }
        },
        mixins: [mixins],
        methods: {
            init() {
                get_locationThrowRank(this.allParams).then(res => {
                    console.log(res);
                    this.table = res;
                })
            }
        }

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
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
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
