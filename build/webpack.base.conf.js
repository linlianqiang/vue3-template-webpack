const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');
const { DllReferencePlugin } = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/main.js'),
        // bundle: path.resolve(__dirname, '../src/main.js')
    },
    // entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        // name 依赖 多入口 entry
        filename: '[name].[hash].js', // contenthash hash被弃用， 会判断文件是否改变，hash不变，则从缓存获取。
        path: path.resolve(__dirname, '../dist'),
        // 资源引用的路径
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
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
        // 多页应用
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../other.html'),
        //     chunks: ['other', 'vender', 'common']
        // }),
        new webpack.DllReferencePlugin({ //在开发中使用更合适
            context: __dirname,
            manifest: require('./dll/vue.manifest.json')
        })
    ],
    resolve: { //模块如何被解析，是否精准匹配
        extensions: ['.vue', '.js'], //自动解析确定的扩展
        alias: {
            '@': path.join(__dirname, "../src") //配置根目录
        }
    }
}