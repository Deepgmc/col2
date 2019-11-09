const server_port = 8080

const Koa = require('koa'),
    Router = require('koa-router'),
    mongoose = require('mongoose')
app = new Koa(),
    router = new Router(),
    bodyParser = require('koa-bodyparser'),
    serve = require('koa-static')

mongoose.connect(`mongodb://127.0.0.1:27017/colony`, { useNewUrlParser: true})


app.use(serve('./public'));
app.use(bodyParser());
app.listen(server_port, () => {
    console.log('Server started at ' + server_port)
})