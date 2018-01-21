/**
 * Created by zhangyi on 2017/11/21.
 */
const router = require('koa-router')()
const userController = require('../controllers/user')

module.exports = router
    .post('/signIn', userController.signIn)
    .get('/userInfo', userController.getUserInfo)
