const path = require('path');
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack');

const webConf = merge(baseConfig,{
  mode: 'development',  //当前环境，默认启用一些配置
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port:'8070'
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
})
// console.log('webConf',webConf)
module.exports = webConf