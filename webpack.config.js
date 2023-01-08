/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: './src/index.js',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],

  },

};