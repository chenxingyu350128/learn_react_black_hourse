const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  plugins: [
    htmlPlugin
  ]
}