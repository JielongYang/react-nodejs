const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

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
        new HappyPack({
            id: 'styles',
            loaders: ['style-loader', 'css-loader']
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