// webpack.config.js
module.exports = {
  // ... other Webpack configurations

  module: {
    rules: [
      // ... other rules

      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
