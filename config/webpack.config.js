var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')


module.exports = {
  context: path.join(__dirname, '../'), // the root of your project
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js'
  ],

  output: {
      path: path.resolve('./src/bundles/'),
      filename: '[name]-[hash].js',
      publicPath: '/static/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    // helpers we want webpack to use
    rules: [
      // specific instructions for each helper
       { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}, // transpile JavaScript files
      // { test: /\.js$/, exclude: /node_modules/, use: ['react-hot-loader/webpack','babel-loader']}, // transpile JavaScript files
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, // transpile css files
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ['file-loader'],
      }, // transpile image files
    ],
  },

  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules'], // tells webpack where to look for node_modules
    extensions: ['', '.js', '.jsx']
  }
}