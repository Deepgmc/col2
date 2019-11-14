let path = require('path');

const login = {
    watch: true,
    mode: 'development',
    /*devtool: 'source-map',*/
    entry: path.resolve(__dirname, 'src') + '/login.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'login_js.js',
        publicPath: '/'
    },
    module: {
        rules: [
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
        ]
    }
}

module.exports = login