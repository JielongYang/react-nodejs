const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd'
    },
    externals: [nodeExternals()],
    mode: 'development'
};

module.exports = merge(baseConfig, serverConfig);