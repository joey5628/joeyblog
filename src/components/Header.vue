<template>
        <!--<div class="header-side">-->
            <!--JoeyBlog-->
        <!--</div>-->
        <div class="header-content">
            header
        </div>
</template>

<script>
    export default {
        name: 'header'
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    .el-header {
        display: flex;
        padding: 0 0;
        flex-direction: row;
        /*background-color: #343d4f;*/
        background-color: #eee;
        .header-side {
            width: 250px;
            background-color: #6590dc;
            color: #fff;
            text-align: center;
            font-family: Savoye LET, Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
            font-size: 40px;
            padding-top: 13px;
        }
    }
</style>
