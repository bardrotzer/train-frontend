const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// these are all base plugins used
module.exports = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    title: 'GTFS test system',
    meta: {
      lang: 'no',
    }
  })
]