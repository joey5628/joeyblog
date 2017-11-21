/**
 * Created by zhangyi on 2017/11/21.
 */
const router = require('koa-router')()

const api = require('../api')

router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
