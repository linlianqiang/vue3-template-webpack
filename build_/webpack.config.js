const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 配置打包文件输出的目录
        path: path.resolve(__dirname, '../dist'),
        // 生成的 js 文件名称
        filename: 'js/[name].[hash:8].js',
        // 生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',
        // 资源引用的路径
        publicPath: '/'
    },
    devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist',
        open: true,
    },
    resolve: {
        extensions: [
            '.js',
            '.vue'
        ],
        alias: {
            '@': path.join(__dirname, "../src") //配置根目录
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader'
                ]
            },
            // {
            //     test: /\.svg$/,
            //     include: [path.resolve('src/icons')],
            //     use: [{
            //         loader: 'svg-sprite-loader',
            //         options: {
            //             symbolId: 'icon-[name]' // name代表图标的名字
            //         }
            //     }

            //     ]
            // },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader'
                    },
                    {
                        loader: 'babel-loader'
                    }
                ]
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
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
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../template.html')
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ]
}
