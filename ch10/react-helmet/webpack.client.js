const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js'
    },
    mode: 'development'
}

module.exports = merge(baseConfig, clientConfig);