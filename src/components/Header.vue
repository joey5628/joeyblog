<template>
    <el-header>
        <div></div>
        <a class="btn-out">
            <i class="iconfont icon-out"></i>
        </a>
    </el-header>
</template>

<script>
    export default {
        name: 'common-header'
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    .el-header {
        height: 54px !important;
        border-bottom: 1px solid @border-color-base;
        display: flex;
        justify-content: space-between;
        text-align: right;
        padding: 0 0 0 20px;

        .btn-out {
            cursor: pointer;
            height: 100%;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;

            i.icon-out {
                font-size: 24px;
            }

            &:hover {
                background-color: @side-fill;
                color: #fff;
            }
        }
    }
</style>
