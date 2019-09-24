const path = require('path');
const loaders = require('./loaders.base.js');
const plugins = require('./plugins.base.js');
const devserver = require('./devserver.config.js');
//
// This is the main config base, it will pull in the corect plugins and stuff as needed
//
module.exports = {
  // adds some indidations to what files are being passed to webpack,
  // and adds an alias to find them
  resolve: {
    extensions: ['.js','.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  entry: '../src/app.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].[contentHash].js',
    chunkFilename: '[id].[contentHash].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: devserver,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    }
  },
  mode: 'development',
  // this is the imported modules
  module: loaders,
  plugins: plugins,
}