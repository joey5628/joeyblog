<template>
    <el-aside class="common-side-wrapper">
            <div class="retract">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="common-side">
                <div class="name-card">
                    <div class="photo-wrapper">
                        <img src="../assets/img/sun.jpg" alt="">
                    </div>
                </div>
                <ul class="link-wrapper">
                    <li v-for="(link, index) in links"
                        :key="index"
                        class="link">
                        <router-link :to="link.path">
                            <i class="iconfont" :class="link.icon"></i>
                            <span>{{link.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
    </el-aside>
</template>

<script>
    export default {
        data () {
            return {
                links: [{
                    name: '首页',
                    path: '/home',
                    icon: 'icon-icon-f1',
                    isActive: true
                }, {
                    name: '文章',
                    path: '/article',
                    icon: 'icon-article',
                    isActive: false
                }, {
                    name: '分类',
                    path: '/category',
                    icon: 'icon-icon03',
                    isActive: false
                }, {
                    name: '标签',
                    path: '/tag',
                    icon: 'icon-tag',
                    isActive: false
                }, {
                    name: '评论',
                    path: '/comment',
                    icon: 'icon-comment',
                    isActive: false
                }]
            }
        },

        methods: {

        }
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    .common-side-wrapper {
        width: 200px !important;
        background-color: @side-fill;
        overflow: hidden;
        box-shadow: 0 0 5px @side-fill;
        position: relative;
        z-index: 2;

        .retract {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 140px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transform: translateY(-50%);
            background-color: @side-fill;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;
            box-shadow: 0 0 5px @side-fill;

            i {
                font-size: 14px;
                font-weight: bold;
                color: #fff;
                margin-left: 22px;
            }
        }
        &:hover {
            .retract {
                left: 172px;
            }
        }

    }
    .common-side {
        height: 100%;
        position: relative;
        background-color: @side-fill;
        z-index: 2;

        .name-card {
            .photo-wrapper {
                margin: auto;
                padding: 20px;
                width: 100px;
                height: 100px;

                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }


        }

        .link-wrapper {
            .link {
                a {
                    height: 50px;
                    line-height: 50px;
                    display: block;
                    color: #fff;
                    font-size: 16px;
                    padding: 0 50px;
                    opacity: .75;

                    .iconfont {
                        margin-right: 15px;
                    }

                    &.router-link-active {
                        background-color: @brand-primary;
                        color: #fff;
                        opacity: 1;
                    }
                }
            }
        }

    }
</style>
