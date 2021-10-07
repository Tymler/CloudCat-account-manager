const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // devtool: 'inline-source-map',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: `[name].prod.js`,
    path: resolve(__dirname, 'prod')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'scope-css-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'scope-css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: "./src/assets/styles/variables.scss"
          }
        }
      ]
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        'scope-css-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: "./src/assets/styles/variables.scss"
          }
        }
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }]
    }, {
      test: /\.(js|jsx)$/,
      use: [
        'babel-loader',
        'scope-jsx-loader'
      ],
      exclude: /node_modules/
    }]
  },
  devServer: {
    // contentBase: './build',
    port: 3000, // 端口号
    // inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
}
