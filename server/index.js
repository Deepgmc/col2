const server_port = 8080

const Koa = require('koa'),
    app = new Koa()
const User = require('./schemas/User')
require('../handlers/favicon').init(app)
require('../handlers/templates').init(app)
require('../handlers/static').init(app)

require('../handlers/session')
require('../handlers/passport').init(app)
require('../handlers/bodyparser').init(app)



/***
 * Добавить strategies/local
 * post запросы на логин/логаут запускают функции паспорта
 *
 * */





const router = require('koa-router')()
router.get('/', async (ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

router.get('/login', async (ctx, next) => {
    console.log('CONNECTION TO LOGIN');

    /*const admin = new User({
        name: 'admin',
        email: 'admin2@admin.com'
    })
    await admin.save()
        .then(() => {console.log('Admin saved!')})
        .catch((err) => {console.log('Error saving admin', err)})
    const user = await User.findOne({'name': 'admin'})*/
    ctx.body = ctx.render('login.pug', {
        message: 'Login page'
    })
})



router.get('/logout', async (ctx, next) => {
    User.remove()
        .catch((err) => {console.log('Error cleanimg users', err)})
    ctx.body = ctx.render('login.pug', {
        message: 'You are logouted'
    })
})

router.get('/register', async (ctx, next) => {
    ctx.body = ctx.render('register.pug')
})


app.use(router.routes())






app.use(async(ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

app.listen(server_port, () => {
    console.log('Server started at ' + server_port)
})