// JavaScript source code
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, './src'),
        use: {
          loader: "babel-loader"
        }
      },
      //{
      //  test: /\.html$/,
      //  use: [
      //    {
      //      loader: "html-loader"
      //    }
      //  ]
      //}
    ],

  },
  output: {
    filename: 'react.js',
    path: __dirname + '/wwwroot'
  }
  //plugins: [
  //  new HtmlWebPackPlugin({
  //    template: "./public/index.html",
  //    filename: "./wwwroot/index.html"
  //  })
  //]
};
