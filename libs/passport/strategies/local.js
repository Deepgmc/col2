const LocalStrategy = require('passport-local')
const User = require('../../../server/schemas/User')

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function(email, password, done) {
        try {
            const user = await User.findOne({email: email})
            if(!user){
                return done(null, false)
            }
            const isValidPassword = await user.checkPassword(password)

            if(!isValidPassword) {
                return done(null, false)
            }

            //password/login is CORRECT - login and redirect to /
            return done(null, user)

        } catch(err){
            console.log('PASSPORT LOCAL CATCH', err)
            done(err)
        }
    }
)