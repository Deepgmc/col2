const pug = require('pug')
const path = require('path')

exports.init = app => app.use(async (ctx, next) => {
    ctx.render = function(tplPath, vars){
        return pug.renderFile(
            path.join('templates', tplPath),
            vars
        )
    }
    await next()
})