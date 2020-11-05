// const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
    },
    // entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: 'bundle.[hash].js', // [contenthash]
        path: path.resolve(__dirname, '../dist'),
        // 资源引用的路径
        publicPath: '/'
    },
    module: {
        rules: [
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
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    isProduction ?
                        {
                            loader: MiniCssExtractPlugin.loader
                        }
                        :
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
                test: /\.svg$/,
                include: [path.resolve('src/icons')],
                use: [{
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]' // name代表图标的名字
                    }
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
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../template.html')
        }),
    ],
    resolve: { //模块如何被解析，是否精准匹配
        extensions: ['.vue', '.js'], //自动解析确定的扩展
        alias: {
            '@': path.join(__dirname, "../src") //配置根目录
        }
    }
}