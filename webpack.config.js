var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './frontend/index.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: [/\.jsx?$/, /\.css$/],
      exclude: /(node_modules)/,
      use: {
        loader: ['babel-loader', 'style-loader', 'css-loader'],
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    }]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};