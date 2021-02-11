const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build/'),
    }
}