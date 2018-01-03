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
                    <li class="link">
                        <router-link to="/home">
                            <i class="iconfont icon-icon-f1"></i>
                            <span>首页</span>
                        </router-link>
                    </li>
                    <li class="link">
                        <router-link to="/post">
                            <i class="iconfont icon-article"></i>
                            <span>文章</span>
                        </router-link>
                    </li>
                    <li class="link">
                        <router-link to="/post">
                            <i class="iconfont icon-icon03"></i>
                            <span>分类</span>
                        </router-link>
                    </li>
                    <li class="link">
                        <router-link to="/post">
                            <i class="iconfont icon-tag"></i>
                            <span>标签</span>
                        </router-link>
                    </li>
                    <li class="link active">
                        <router-link to="/post">
                            <i class="iconfont icon-comment"></i>
                            <span>评论</span>
                        </router-link>
                    </li>
                </ul>
            </div>
    </el-aside>
</template>

<script>
    export default {
        name: 'side'
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
                }
                &.active {
                    a {
                        background-color: @brand-primary;
                        color: #fff;
                        opacity: 1;
                    }
                }
            }
        }

    }
</style>
