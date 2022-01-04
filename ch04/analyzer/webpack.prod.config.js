const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const addAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HappyPack = require('happypack');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'happypack/loader?id=styles'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin(),
        new addAssetHtmlPlugin([{
            filepath: path.resolve(__dirname, './dll/vendor.js')
        }]),
        new HappyPack({
            id: 'styles',
            loaders: ['style-loader', 'css-loader']
        }),
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, './dll/manifest.json')),
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    }
};