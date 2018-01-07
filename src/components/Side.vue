<template>
    <el-aside class="common-side-wrapper" :class="{retract: isRetract}">
        <div class="btn-retract" v-on:click="retractToggle">
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
                    :key="index">
                    <router-link :to="link.path" class="link">
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
                isRetract: false,
                links: [{
                    name: '首页',
                    path: '/home',
                    icon: 'icon-icon-f1',
                }, {
                    name: '文章',
                    path: '/article',
                    icon: 'icon-article',
                }, {
                    name: '分类',
                    path: '/category',
                    icon: 'icon-icon03',
                }, {
                    name: '标签',
                    path: '/tag',
                    icon: 'icon-tag',
                }, {
                    name: '评论',
                    path: '/comment',
                    icon: 'icon-comment',
                }]
            }
        },

        methods: {
            retractToggle () {
                console.log(111)
                this.isRetract = !this.isRetract
                console.log('this.isRetract:', this.isRetract)
            }
        }
    }
</script>

<style lang="less">
    @import "../assets/css/default.less";

    .retractTransition () {
        transition: all 0.3s;
    }

    .common-side-wrapper {
        width: 200px !important;
        background-color: @side-fill;
        box-shadow: 0 0 5px @side-fill;
        z-index: 2;
        .retractTransition;

        .btn-retract {
            cursor: pointer;
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
                .retractTransition;
            }
        }
        &:hover {
            .btn-retract {
                left: 172px;
            }
        }

        .common-side {
            height: 100%;
            position: relative;
            background-color: @side-fill;
            z-index: 2;

            .name-card {
                padding: 20px 0;

                .photo-wrapper {
                    margin: auto;
                    /*padding: 20px;*/
                    width: 100px;
                    height: 100px;
                    .retractTransition;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }

            a.link {
                height: 50px;
                line-height: 50px;
                color: #fff;
                font-size: 16px;
                display: block;
                padding: 0 50px;
                opacity: .75;
                overflow: hidden;

                &:hover {
                    background-color: rgba(36, 168, 232, .3);
                }
                i.iconfont {
                    margin-right: 15px;
                    .retractTransition;
                }

                span {
                    opacity: 1;
                    height: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .retractTransition;
                }

                &.router-link-active {
                    background-color: @brand-primary;
                    color: #fff;
                    opacity: 1;
                }
            }
        }

        &.retract {
            width: 60px !important;

            .btn-retract {
                left: 0;
                i {
                    transform: rotate(180deg);
                }

            }

            &:hover {
                .btn-retract {
                    left: 32px;
                }
            }

            .common-side {
                .name-card {
                    .photo-wrapper {
                        width: 40px;
                        height: 40px;
                    }
                }

                a.link {
                    padding: 0 19px;
                    span {
                        opacity: 0;
                    }

                    .iconfont {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>
