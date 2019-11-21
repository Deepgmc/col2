const LocalStrategy = require('passport-local')
const User = require('../../../server/schemas/User')

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function(email, password, done) {
        try {
            const user = await User.findOne({email})
            if(!user){
                return done(null, false, {message: 'No such user'})
            }
            const isValidPassword = await user.checkPassword(password)

            if(!isValidPassword)
                return done(null, false, {message: 'Password incorrect'})
            return done(null, false, {message: 'Welcome back!'})
        } catch(err){
            console.log(err)
            done(err)
        }
    }
)