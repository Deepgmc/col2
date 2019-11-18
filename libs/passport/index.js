const passport = require('koa-passport')
const User = require('../../../server/schemas/User')

const localStrategy = require('./strategies/local')

passport.serializeUser((id, done) => {
    done(null, user.id)
})

passport.deserializeUser(() => {
    User.findById(id, done)
})

passport.use(localStrategy)

module.exports = passport