/* eslint-disable no-undef */
const path = require('path')

const config = {
  entry: './src/index.js',
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
    ],
  },
}
module.exports = config