const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.conf')
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    optimization: { //实现按需加载，将业务代码 与 带三方库代码进行分离
        splitChunks: {
            cacheGroups: {
                vendor: { //第三方库
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    minSize: 0,
                    minChunks: 1,
                    priority: 10,// 资源加载优先级
                    chunks: 'initial' //同步
                },
                common: { //公共代码
                    name: 'common',
                    test: /[\\/]src[\\/]/,
                    chunks: 'all', //静态引入，和动态引入都考虑在内
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
})