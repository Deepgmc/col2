const server_port = 8080

const Koa = require('koa'),
    app = new Koa()

require('../handlers/favicon').init(app)
require('../handlers/templates').init(app)
require('../handlers/static').init(app)
//require('../handlers/bodyparser').init(app)


const koa_router = require('./routes')
app.use(koa_router.routes())





app.use(async(ctx, next) => {
    ctx.body = ctx.render('error.pug')
})

app.listen(server_port, () => {
    console.log('Server started at ' + server_port)
})