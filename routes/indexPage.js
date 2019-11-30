exports.get = async (ctx, res) => {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('game.pug', {
            pageName: 'Colony main header',
            user: ctx.state.user
        })
    } else {
        console.log('NOT LOGINED INDEX')
        ctx.redirect('/login')
    }
}