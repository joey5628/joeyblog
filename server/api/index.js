/**
 * Created by zhangyi on 2017/11/21.
 */
const router = require('koa-router')()

const user = require('./user')

router.use('/user', user.routes(), user.allowedMethods())

module.exports = router
