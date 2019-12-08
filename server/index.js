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
//const User = require('../server/schemas/User')
const Game = require('../server/schemas/Game')

//INDEX
router.get('/', require('../routes/indexPage').get)

//LOGIN
router.get('/login', require('../routes/login').get)
//TODO ДОБАВИТЬ ОШИБКИ АУТЕНТИФИКАЦИИ
router.post('/login', require('../routes/login').post)

//REGISTER
router.get('/register', require('../routes/register').get)
router.post('/register', require('../routes/register').post)


//API
router.get('/api/get-user-data', async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.body = {
            '_id': ctx.state.user._id,
            'email': ctx.state.user.email
        }
    }
})
router.get('/api/get-init-data', async (ctx) => {
    if(ctx.isAuthenticated()){
        const user_game = await Game.findOne({
            userId: ctx.state.user._id
        })
        if(isNaN(parseFloat(user_game.currentDate))){
            ctx.throw(404, 'Cant find game object')
        }
        //берем из базы реальное значение объекта Game для текущего юзера
        ctx.body = {
            currentDate: user_game.currentDate
        }
    } else {
        ctx.redirect('/login')
    }
})


//LOGOUT
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