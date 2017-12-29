<template>
    <ul>
        <li class="link">
            <router-link to="/post">文章管理</router-link>
        </li>
        <li class="link">
            <router-link to="/post">文章管理</router-link>
        </li>
        <li class="link">
            <router-link to="/post">文章管理</router-link>
        </li>
        <li class="link active">
            <router-link to="/post">文章管理</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'side'
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";


    .link {
        a {
            height: 50px;
            line-height: 50px;
            display: block;
            color: #fff;
            font-size: 16px;
            padding: 0 40px;
        }
        &.active {
            a {
                border-left: 2px solid @brand-primary;
                padding: 0 40px 0 38px;
                background-color: @side-active-fill;
            }
        }
    }
</style>
