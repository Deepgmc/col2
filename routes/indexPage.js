exports.get = async (ctx, res) => {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('game.pug', {
            pageName: 'Колония'
        })
    } else {
        console.log('NOT LOGINED INDEX')
        ctx.redirect('/login')
    }
}