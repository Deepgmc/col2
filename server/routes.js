const router = require('koa-router')()

//ctx.redirect('/login')//если надо редиректить куда-то
router.get('/', async (ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

router.get('/login', async (ctx, next) => {
    ctx.body = ctx.render('login.pug')
})

router.get('/logout', async (ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

router.get('/register', async (ctx, next) => {
    ctx.body = ctx.render('register.pug')
})


module.exports = router