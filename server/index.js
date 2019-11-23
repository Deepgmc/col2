const server_port = 8080

const Koa = require('koa'),
    app = new Koa()

require('../handlers/favicon').init(app)
require('../handlers/templates').init(app)
require('../handlers/static').init(app)

require('../handlers/session').init(app)
require('../handlers/bodyparser').init(app)

require('../handlers/passport').init(app)
//const passport = require('../libs/passport/index')


const router = require('koa-router')()

router.get('/', async function(ctx) {
    if(ctx.isAuthenticated()){
        ctx.body = ctx.render('game.pug', {
            pageName: 'YAHOOOOO! Game page reached!!!'
        })
    } else {
        console.log('NOT LOGINED')
        ctx.body = ctx.render('login.pug')
    }
})

router.post('/login', require('../routes/login').post)
router.get('/login', function(ctx) {
    if(ctx.isAuthenticated()){
        ctx.redirect('/')
    } else {
        ctx.body = ctx.render('login.pug', {
            pageName: 'Login page'
        })
    }
})



router.get('/register', require('../routes/register').get)
router.post('/register', require('../routes/register').post)
router.get('/logout', async (ctx) => {
    ctx.logout()
    ctx.redirect('/')
})


app.use(router.routes())






app.use(async(ctx) => {
    ctx.body = ctx.render('error.pug')
})

app.listen(server_port, () => {
    console.log('Server started at ' + server_port)
})