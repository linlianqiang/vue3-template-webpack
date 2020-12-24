const path = require('path');
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack');

const webConf = merge(baseConfig, {
    mode: 'development',  //当前环境，默认启用一些配置
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: '8060',
        proxy: {
            '/blog': 'http://127.0.0.1:8090',
            '/user': 'http://127.0.0.1:8090'
        }
        // noInfo: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                exclude: [path.resolve('src/icons')],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    esModule: false, //关闭es6规范，采用common.js
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({ //开发环境更适用，加快构建过程
            context: __dirname,
            manifest: require('./dll/vue.manifest.json')
        })
    ]
})
// console.log('webConf',webConf)
module.exports = webConf