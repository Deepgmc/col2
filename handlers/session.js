const session = require('koa-session')
const mongooseStore = require('koa-session-mongoose-store')

exports.init = app => app.use(session({
    signed: false,
    store: new mongooseStore()
}, app))