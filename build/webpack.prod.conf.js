const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //抽离css 配置，从html抽离
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        noParse: /loadsh/,  //不需要解析的库
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
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
                        loader: MiniCssExtractPlugin.loader
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
                            limit: 5 * 1024, //小于5kb的图片，直接打包成Base64，可以减少http请求。
                            outputPath: './img/', //生产环境，打包图片到某个目录下
                        }
                    }
                ]
            },
        ]
    },
    optimization: { //实现按需加载，将业务代码 与 带三方库代码进行分离
        splitChunks: {
            cacheGroups: {//缓存分组
                vendor: { //第三方库
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    minSize: 0,
                    minChunks: 1, //最少复用过1次
                    priority: 10,// 资源加载优先级
                    chunks: 'initial' //同步
                },
                common: { //公共代码
                    name: 'common',
                    test: /[\\/]src[\\/]/,
                    chunks: 'all', //静态引入，和动态引入都考虑在内
                    minChunks: 2,//最少引用两次
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ //提取css
            filename: 'css/[name].[hash].css',
            // chunkFilename: '[id].[hash].css'
        }),
        new OptimizeCssAssetsPlugin({ //压缩优化css
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
})