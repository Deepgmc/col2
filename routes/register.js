const User = require('../server/schemas/User')

exports.get = async (ctx) => {
    ctx.body = ctx.render('register.pug', {
        pageName: 'Register page'
    })
}


exports.post = async (ctx) => {
    const email = ctx.request.body.email,
        password = ctx.request.body.password

    try {
        const user = new User({
            email: email
        })
        await user.setPassword(password)
        await user.save()
    } catch(e) {
        console.log(e);
        return 'register failed'
    }
}