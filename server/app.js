/**
 * Created by zhangyi on 2017/11/21.
 */
'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const routes = require('./routes/index')
const config = require('../config')
const mongoose = require('./db')

const app = new Koa()

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    const convert = require('koa-convert')
    const webpack = require('webpack')
    const webpackDevMiddleware = require("koa-webpack-dev-middleware")
    const webpackHotMiddleware = require("koa-webpack-hot-middleware")

    const devWebpackConfig = require('../build/webpack.dev.conf')

    let compiler = webpack(devWebpackConfig)

    let devMiddleware = webpackDevMiddleware(compiler, devWebpackConfig.devServer)

    let hotMiddleware = webpackHotMiddleware(compiler, {
        log: () => {}
    })

    // force page reload when html-webpack-plugin template changes
    // compiler.plugin('compilation', function (compilation) {
    //     compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    //         // hotMiddleware.publish({ action: 'reload' })
    //         cb()
    //     })
    // })

    app.use(convert(devMiddleware))
    app.use(convert(hotMiddleware))
}

// 配置控制台日志中间件
app.use(koaLogger())

// 配置ctx.body解析中间件
app.use(bodyParser())

app.use(routes.routes()).use(routes.allowedMethods())

app.listen(config.port, ()=>{
    console.log('server listen 8001')
})
