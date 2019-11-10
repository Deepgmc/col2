const Router = require('koa-router'),
    router = new Router()



router.get('/', async (ctx, next) => {
    ctx.body = ctx.render('login.pug', {
        name: 'Index name'
    })
})

router.get('/test', async (ctx, next) => {
    ctx.body = ctx.render('login.pug', {
        name: 'Test name'
    })
})


module.exports = router