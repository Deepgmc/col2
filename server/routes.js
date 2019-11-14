const router = require('koa-router')()


router.get('/', async (ctx, next) => {
    ctx.body = ctx.render('error.pug', {})
})

router.get('/login', async (ctx, next) => {
    ctx.body = ctx.render('login.pug', {
        name: 'Login name'
    })
})

router.get('/register', async (ctx, next) => {
    //ctx.redirect('/login')//если надо редиректить куда-то
    ctx.body = ctx.render('register.pug', {
        name: 'Login name'
    })
})


module.exports = router