<template>
    <div class="login-wrapper">
        <div class="login-main">
            <h2>登&nbsp;录</h2>
            <div>
                <div class="input-group">
                    <input type="text" placeholder="用户名"/>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="密码"/>
                </div>

                <div class="input-group">
                    <button class="btn-login" v-on:click="signIn">登&nbsp;录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Http from 'base/Http'

    export default {
        data: ()=> {
            return {

            }
        },

        created: function() {
            console.log('created:', API_URL)
//            this.signIn()
        },

        methods: {
            async signIn() {
                console.log('signIn')
                let json = await Http.post({
                    url: 'http://localhost:8000/api/user/signIn',
                    params: {
                        username: 'zhangyi',
                        password: '123456'
                    }
                })
                console.log('json:', json)
            }
        }
    }
</script>

<style lang="less">
    .login-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(../assets/img/bg_login1.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        -webkit-background-size: cover;

        .input-group {
            text-align: center;

            input {
                background: transparent;
                border: 0 none;
                border-bottom: 1px solid rgba(238, 238, 238, 0.41);
                color: #fff;
                padding: 10px;
                outline: 0 none;
                margin-bottom: 20px;
                display: block;
                width: 100%;
                box-sizing: border-box;
            }

            .btn-login {
                margin-top: 20px;
                display: inline-block;
                line-height: 1;
                outline: 0 none;
                background: none;
                border: 1px solid rgba(238, 238, 238, 0.41);
                text-align: center;
                color: #fff;
                padding: 12px 20px;
                width: 70%;
                border-radius: 5px;
                transition: .5s all;

                &:hover,
                &:active {
                    border-color: #fff;
                }
            }
        }
    }

    .login-main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 26%;
        padding: 40px;
        background-color: rgba(10, 10, 10, 0.77);
        border: 2px ridge rgba(238, 238, 238, 0.13);
        border-radius: 5px;
        -moz-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
        -webkit-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
        box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
        border-bottom: none;
        border-bottom-left-radius: initial;
        border-bottom-right-radius: initial;

        h2 {
            color: rgba(238, 238, 238, 0.8);
            text-align: center;
            font-weight: normal;
            margin-bottom: 20px;
        }
    }


    @media screen and (max-width: 1024px) {
        .login-main {
            width: 35%;
        }
    }

    @media screen and(max-width: 960px) {
        .login-main {
            width: 40%;
        }
    }
    @media screen and(max-width: 768px)  {
        .login-main {
            width: 50%;
        }
    }
    @media screen and(max-width: 480px) {
        .login-main {
            width: 70%;
        }
    }

    /*@media screen and (max-width: 1440px) {*/
        /*.login-main {*/
            /*width: 26%;*/
        /*}*/
    /*}*/

    /*@media screen and (max-width: 1280px) {*/
        /*.login-main {*/
            /*width: 35%;*/
        /*}*/
    /*}*/

    /*@media screen and (max-width: 1024px) {*/
        /*.login-main {*/
            /*width: 45%;*/
        /*}*/
    /*}*/

    /*@media screen and (max-width: 966px) {*/
        /*.login-main {*/
            /*width: 55%;*/
        /*}*/
    /*}*/
</style>


