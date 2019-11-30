const path = require('path')
const rules = [
    { test: /\.css$/,
        exclude: '/node_modules',
        use: ['style-loader', 'css-loader']
    },
    { test: /\.js$/,
        exclude: '/node_modules',
        use: 'babel-loader'
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: '/node_modules',
        use: ['file-loader']
    }
],
    watch = true,
    mode = 'development',
    devtool = 'source-map',
    public_path = require('path').resolve(__dirname, 'public')

const header = {
    watch: true,
    mode: mode,
    devtool: devtool,
    entry: path.resolve(__dirname, 'src') + '/header.js',
    output: {
        path: public_path,
        filename: 'header.js',
        publicPath: '/'
    },
    module: {rules}
}
const login = {
    watch: watch,
    mode: mode,
    devtool: devtool,
    entry: path.resolve(__dirname, 'src') + '/login.js',
    output: {
        path: public_path,
        filename: 'login.js',
        publicPath: '/'
    },
    module: {rules}
}

const register = {
    watch: true,
    mode: mode,
    devtool: devtool,
    entry: path.resolve(__dirname, 'src') + '/register.js',
    output: {
        path: public_path,
        filename: 'register.js',
        publicPath: '/'
    },
    module: {rules}
}
const colony = {
    watch: true,
    mode: mode,
    devtool: devtool,
    entry: path.resolve(__dirname, 'src') + '/colony.js',
    output: {
        path: public_path,
        filename: 'colony.js',
        publicPath: '/'
    },
    module: {rules}
}

module.exports = [header, login, register, colony]