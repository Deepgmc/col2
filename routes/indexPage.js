exports.get = async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('game.pug', {
            pageName: 'YAHOOOOO! Game page reached!!!'
        })
    } else {
        console.log('NOT LOGINED')
        ctx.body = ctx.render('login.pug')
    }
}