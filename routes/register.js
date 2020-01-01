const User = require('../server/schemas/User')
const Game = require('../server/schemas/Game')


exports.post = async (ctx) => {
    const email = ctx.request.body.email
    const password = ctx.request.body.password

    try {
        const user = new User({
            email: email,
            salt: '',
            passwordHash: ''
        })
        await user.setPassword(password)
        await user.save()

        //тут нужно создать запись Game для этого юзера
        //записать туда пустую сетку карты, разместить в центре посадочный модуль
        //задать юзеру дату начала игры 1577863800 = 01.01.2020 - дефолтное значение для нового юзера
        // в сетку придумать как добавлять здание. Наверное, нужен будет массив с типами зданий

        const game = new Game({
            userId      : user._id
        })
        await game.generateInitialField()
        await game.save()


        ctx.body = JSON.stringify({
            registerSuccess: true,
            message: 'Вы успешно зарегистрированы. Передите на страницу входа'
        })
    } catch(e) {
        console.log('<<<<<<<<<<< REGISTER CATCH ERORR: ', e)
        let msg = 'Ошибка регистрации'
        if(e.errors && e.errors.email){
            msg = e.errors.email.message
        }
        ctx.body = JSON.stringify({
            registerSuccess: false,
            message: msg
        })
    }
}


exports.get = async (ctx) => {
    if(ctx.isAuthenticated()){
        ctx.redirect('/login')
    } else {
        ctx.body = ctx.render('register.pug', {
            pageName: 'Регистрация в Colony'
        })
    }
}