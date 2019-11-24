const server_port = 8080

const Koa = require('koa'),
    app = new Koa()

require('../handlers/favicon').init(app)
require('../handlers/templates').init(app)
require('../handlers/static').init(app)
require('../handlers/session').init(app)
require('../handlers/bodyparser').init(app)
require('../handlers/passport').init(app)
const router = require('koa-router')()

router.get('/', require('../routes/indexPage').get)

router.get('/login', require('../routes/login').get)
router.post('/login', require('../routes/login').post)

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