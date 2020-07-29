const catchError = async (ctx, next) => {
    try{
        await next()
    } catch (error) {
        if (global.config.environment == 'dev') {
            throw error
        }
        if (error.errorCode) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request:`${ctx.method} ${ctx.path}`
            }
        } else {
            ctx.body = {
                msg: 'we made a mistake'
            }
        }
    }
}

module.exports = catchError;