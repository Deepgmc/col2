exports.get = async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('game.pug', {
            pageName: 'Colony main header'
        })
    } else {
        console.log('NOT LOGINED INDEX')
        ctx.body = ctx.render('login.pug')
    }
}