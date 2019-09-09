/*
 * @Author: Lucia
 * @Date: 2019-05-20 16:08:47
 * @Last Modified by: Lucia
 * @Last Modified time: 2019-09-04 16:04:46
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let env = process.env.NODE_ENV == "development" ? "development" : "production";

function configHtml(htmlName, title) {
    return {
        template: './src/view/' + htmlName + '.html',
        filename: 'view/' + htmlName + '.html',
        inject: true,
        hash: true,
        title: title,
        chunks: ['common', htmlName]
    };
}

module.exports = {
    mode: env,
    // entry: './src/page/index/index.js',
    entry: {
        index: './src/page/index/index.js',
        login: './src/page/login/login.js',
        register: './src/page/register/register.js',
        forgetPassword: './src/page/forgetPassword/forgetPassword.js',
        message: './src/page/message/message.js',
        profile: './src/page/profile/profile.js',
        shippingaddress: './src/page/shippingaddress/shippingaddress.js',
        order: './src/page/order/order.js',
        about: './src/page/About/about.js',
        product: './src/page/product/product.js',
        productdetail: './src/page/productdetail/productdetail.js',
        shoppingcart: './src/page/shoppingcart/shoppingcart.js'
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
    /* optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0
        }
    }, */
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
                        outputPath: 'image',
                        publicPath: '../image/'
                    },
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // {
            //     test: /\.(html)$/,
            //     use: {
            //         loader: 'html-loader',
            //     }
            // }
        ]
    },
    resolve: {
        alias: {
            nodeModules: path.resolve(__dirname, 'node_modules'),
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
        new HtmlWebpackPlugin(configHtml('index', 'home')),
        new HtmlWebpackPlugin(configHtml('message', 'message')),
        new HtmlWebpackPlugin(configHtml('login', 'login')),
        new HtmlWebpackPlugin(configHtml('register', 'register')),
        new HtmlWebpackPlugin(configHtml('forgetPassword', 'forgetPassword')),
        new HtmlWebpackPlugin(configHtml('profile', 'profile')),
        new HtmlWebpackPlugin(configHtml('shippingaddress', 'shippingaddress')),
        new HtmlWebpackPlugin(configHtml('order', 'order')),
        new HtmlWebpackPlugin(configHtml('About', 'About')),
        new HtmlWebpackPlugin(configHtml('product', 'product')),
        new HtmlWebpackPlugin(configHtml('productdetail', 'productdetail')),
        new HtmlWebpackPlugin(configHtml('shoppingcart', 'shoppingcart'))
    ],
};