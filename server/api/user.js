/**
 * Created by zhangyi on 2017/11/21.
 */
const router = require('koa-router')()

module.exports = router
    .get('/userInfo', (ctx)=>{
        ctx.body = {
            code: 0,
            data: null
        }
    })
