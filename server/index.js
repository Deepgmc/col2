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
        // берем из базы реальное значение объекта Game для текущего юзера
        // при первоначальном логине
        ctx.body = {
            currentDate: user_game.currentDate,
            resources: user_game.resources,
            fields: user_game.fields
        }
    } else {
        ctx.redirect('/login')
    }
})

router.patch('/api/set-new-day', async (ctx) => {
    if(ctx.isAuthenticated()){
        const user_game = await Game.findOne({
            userId: ctx.state.user._id
        })
        if(isNaN(parseInt(user_game.currentDate))){
            ctx.throw(404, 'Cant find game object')
        }
        //обновляем игровую дату, сохраняем её текущему юзеру и возвращаем обратно на клиент
        const newCurrentDate = parseInt(user_game.currentDate) + (3600 * 24)
        user_game.currentDate = newCurrentDate
        user_game.resources.oxygen = user_game.resources.oxygen - 15
        user_game.resources.water = user_game.resources.water - 1
        user_game.resources.food = user_game.resources.food - 1
        try{
            await user_game.save()
            ctx.body = {
                currentDate: newCurrentDate,
                resources: user_game.resources,
                fields: user_game.fields
            }
        } catch (e) {
            ctx.throw(500, 'Set new day server error occured')
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