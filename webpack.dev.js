const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }],
              'react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: false,
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    stats: 'minimal',
    open: true,
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Router 4',
      // minify: {
      //   collapseWhitespace: true,
      // },
      hash: true,
      template: 'index.pug',
      filename: '../index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
    }),
  ],
};
