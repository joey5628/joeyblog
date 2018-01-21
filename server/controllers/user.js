const User = require('../models/user')

module.exports = {
    /**
     * 登录
     * @param ctx
     * @returns {Promise<void>}
     */
    async signIn (ctx) {
        const { username, password } = ctx.request.body

        await User.findOne({
            username
        }, (err, user) => {
            if (err) {
                throw(err)
            }

            if (user) {
                if (password === user.password) {
                    ctx.session.user = {
                        username,
                        password
                    }
                    return ctx.success('登录成功')
                } else {
                    return ctx.error('密码错误')
                }
            }
            return ctx.error('用户不存在')
        })
    },

    async getUserInfo (ctx) {

        const query = ctx.request.query

        const username = query.username
        await User.findOne({
            username
        }, (err, user) => {
            if (err) {
                throw(err)
            }

            if (user) {
                return ctx.success({
                    data: user
                })
            }
            return ctx.error('未查找到相应的用户')
        })
    }
}
