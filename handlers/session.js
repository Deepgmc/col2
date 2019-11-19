const session = require('koa-session')
const mongooseStore = require('koa-session-mongoose-store')
const mongoose = require('../server/db')

exports.init = app => app.use(session({
    signed: false,
    store: mongooseStore.create({
        name: 'Session',
        expires: 3600 * 4,
        connection: mongoose
    })
}))