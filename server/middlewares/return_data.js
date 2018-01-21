
function data (ctx, status) {

    return async (msg, obj) => {
        obj = obj || {}

        if (typeof msg === 'object') {
            const message = status ? '成功' : '失败'
            obj = Object.assign({ message }, msg)
            // obj = msg
        } else if (typeof msg === 'string') {
            obj.message = msg
        }

        obj.success = status
        // console.log('ctx.headers:', ctx.headers)
        return ctx.body = obj;
    }
}

module.exports = async function (ctx, next) {
    if (!ctx.success) {
        ctx.success = data(ctx, true)
    }
    if (!ctx.error) {
        ctx.error = data(ctx, false)
    }
    await next()
}
