const passport = require('../libs/passport')

exports.post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
})

exports.get = (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.redirect('/')
    } else {
        ctx.body = ctx.render('login.pug', {
            pageName: 'Login page'
        })
    }
}


//ДЛЯ AJAX AUTH тут заготовки
/*exports.post = async function(ctx) {
    await passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/'
    })
    const email = ctx.request.body.email,
        password = ctx.request.body.password
    const user = await User.findOne({
        email: email
    })
    if(!user){
        ctx.throw(404, 'No user with ' + email + ' email.')
    }
    const isPassOk = await user.checkPassword(password)
    if(isPassOk){
        await user.save()
        await ctx.login(user)
        ctx.redirect('/')
    } else {
        ctx.throw(404, 'Cant login')
    }
}*/
