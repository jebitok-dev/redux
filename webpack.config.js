const path = require('path');

module.exports = {
  entry: './src/playground/exp-manage.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, //regex scss
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',//show specific line code on bundle.js file 
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true //show other path apart from the dashboard localhost://8080
  }
};
