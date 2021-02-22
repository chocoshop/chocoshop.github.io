const path = require('path');

module.exports = {
    watch: true,
    mode: process.env.WEBPACK_MODE,
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build/'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react',],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}