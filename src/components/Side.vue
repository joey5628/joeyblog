<template>
    <div class="common-side">
        <div class="retract">
            <i class="el-icon-arrow-left"></i>
        </div>
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
</template>

<script>
    export default {
        name: 'side'
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    .common-side {

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
            box-shadow: 0 0 5px #333;

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

        .name-card {
            .photo-wrapper {
                margin: 20px auto;
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
            position: relative;
            z-index: 2;
            .link {
                background-color: @side-fill;
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
