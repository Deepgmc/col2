const passport = require('koa-passport')

exports.init = app => {
    // making methods:
    // ctx.login
    // ctx. logout
    // ctx.isAuthenticated
    app.use(passport.initialize())
    app.use(passport.session())
}