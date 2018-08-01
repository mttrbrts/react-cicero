var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    client: [
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, 'src')],
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        include: [/node_modules/],
        use: ['shebang-loader']
      },
      {
        test: /\.(ne|cta)$/,
        use:['raw-loader']
      }
    ]
  }, 
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'src/loaders/')],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};