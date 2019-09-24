const path = require('path');
const loaders = require('./loaders.base.js');
const plugins = require('./plugins.base.js');
//
// This is the main config base, it will pull in the corect plugins and stuff as needed
//
module.exports = {
  // adds some indidations to what files are being passed to webpack,
  // and adds an alias to find them
  resolve: {
    extensions: ['.js','.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/app.js',

  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, '../dist')
  },
  mode: 'development',
  // this is the imported modules
  module: loaders,
  plugins: plugins,
}