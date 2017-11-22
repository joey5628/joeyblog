const User = require('../models/user')

module.exports = {
    async signIn (ctx) {
        let result = {
            success: false,
            message: '用户不存在'
        }

        const { username, password } = ctx.request.body

        await User.findOne({
            username
        }, (err, user) => {
            console.log('user:', user)
            if (err) {
                throw(err)
            }

            if (user) {
                if (password === user.password) {
                    result = {
                        success: true,
                        message: '成功'
                    }
                } else {
                    result = {
                        success: false,
                        message: '密码错误'
                    }
                }
            }

            ctx.body = result
        })
    }
}
