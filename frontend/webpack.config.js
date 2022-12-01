/* eslint-disable no-undef */
const path = require('path')

const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    // it will be compiled to ./build/main.js
    path: path.resolve(__dirname, 'build'), // __dirname contains the absolute path of the directory containing the current file
    filename: 'main.js'
  },
  // module defines loaders in the rules array
  module: {
    rules: [
      // use the babel loader with all files ending in .js 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      // for webpack to handle images
      {
        type: 'asset',
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      }
    ],
  },
}
module.exports = config