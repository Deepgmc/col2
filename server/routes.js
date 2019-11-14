const router = require('koa-router')()


router.get('/', async (ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

router.get('/login', async (ctx, next) => {
    ctx.body = ctx.render('login.pug')
})

router.get('/register', async (ctx, next) => {
    //ctx.redirect('/login')//если надо редиректить куда-то
    ctx.body = ctx.render('register.pug')
})


module.exports = router