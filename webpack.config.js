/*
 * @Author: Lucia
 * @Date: 2019-05-20 16:08:47
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-07-29 16:28:19
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let env = process.env.NODE_ENV == "development" ? "development" : "production";

function configHtml(htmlName) {
    return {
        template: './src/view/' + htmlName + '.html',
        filename: 'view/' + htmlName + '.html',
        inject: true,
        hash: true,
        chunks: ['common', htmlName]
    };
}

module.exports = {
    mode: env,
    // entry: './src/page/index/index.js',
    entry: {
        // common: './src/page/common/index.js',
        index: './src/page/index/index.js',
        login: './src/page/login/login.js'
    },
    devtool: 'inline-source-map',
    output: {
        // filename: 'bundle.js',
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        'jquery': 'jQuery'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        publicPath: '../images/'
                    },
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            util: path.resolve(__dirname, 'src/util/'),
            page: path.resolve(__dirname, 'src/page/'),
            service: path.resolve(__dirname, 'src/service/'),
            image: path.resolve(__dirname, 'src/image/'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new HtmlWebpackPlugin(configHtml('index')),
        new HtmlWebpackPlugin(configHtml('login'))
    ],

}