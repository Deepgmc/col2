const User = require('../server/schemas/User')

exports.get = async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.redirect('/login')
    } else {
        ctx.body = ctx.render('register.pug', {
            pageName: 'Register page'
        })
    }
}


exports.post = async (ctx) => {
    const email = ctx.request.body.email
    const password = ctx.request.body.password

    try {
        const user = new User({
            email: email,
            salt: '',
            passwordHash: ''
        })
        await user.setPassword(password)
        await user.save()
        ctx.body = JSON.stringify({
            registerSuccess: true,
            message: 'Вы успешно зарегистрированы <a href="/login">Войти</a>'
        })
    } catch(e) {
        let msg = 'Ошибка регистрации'
        if(e.errors.email){
            msg = e.errors.email.message
        }
        ctx.body = JSON.stringify({
            registerSuccess: false,
            message: msg
        })
    }
}