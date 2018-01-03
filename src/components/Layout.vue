<template>
    <!--<el-container class="wrapper is-vertical">-->
        <!--<el-aside>-->
        <!--</el-aside>-->
        <!--<el-container class="container">-->
            <!--<el-header>-->
            <!--</el-header>-->
            <!--<el-main>-->
                <!--<router-view class="el-main layout-container"></router-view>-->
            <!--</el-main>-->
        <!--</el-container>-->
    <!--</el-container>-->
    <el-container class="wrapper">
        <common-side/>
        <el-container class="container is-vertical">
            <common-header></common-header>
            <el-main>
                <router-view class="layout-container"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Header from 'components/Header'
    import Side from 'components/Side'
    import CommonHeader from "@/components/Header";

    export default {
        components: {
            CommonHeader,
            'common-header': Header,
            'common-side': Side
        }
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    html, body, #app {
        width: 100%;
        height: 100%;
    }
    .wrapper {
        height: 100%;
        .container {
            flex: 1;
        }

        .el-main {
            background-color: #f3f9f9;
        }
    }

</style>
