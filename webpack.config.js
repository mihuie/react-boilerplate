const {
  // DefinePlugin,
  HotModuleReplacementPlugin,
  IgnorePlugin,
  CompressionPlugin,
  optimize: {
    UglifyJsPlugin
  }
} = require('webpack');

// require('dotenv').config();
const path = require('path');
require('babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const ENV_PRODUCTION = 'production';
const env = process.env.NODE_ENV.trim();

const DEV_MODE = env !== ENV_PRODUCTION;
const ENTRY = 'site/';

const entry = {
  [ENTRY]: './src/site/index.js'
};

const config = {
  entry,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      }, {
        test: /\.scss$/,
        loaders: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader'},
          {loader: 'sass-loader',
            options: {
              data: '@import "src/styles/base.scss";'
            }
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
              // localIdentName: '[name]--[local]',
            },

          },
          'postcss-loader' // has separate config, see postcss.config.js nearby
        ]
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.ico$/,
        use: 'url-loader?limit=100000&name=./images/[hash].[ext]'
      }, {
        test: /\.png$/,
        use: 'url-loader?limit=100000&name=./images/[hash].[ext]'
      }, {
        test: /\.jpg$/,
        use: 'file-loader?limit=100000&name=./images/[hash].[ext]'
      }
    ]
  },

  plugins: [],

  resolve: {
    extensions: ['.js', '.scss']
  },

  output: {
    path: __dirname + '/dev',
    publicPath: '/',
    filename: '[name]entry.js',
  },
};

if (DEV_MODE) {
  config.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.template.html',
    filename: './index.html',
    favicon: './dev/images/favicon.ico',
    inject: 'body',
    chunks: [ENTRY, 'webpack-dev-server/client?http://127.0.0.1:8080/', 'webpack/hot/only-dev-server']
  }));

  config.plugins.push(new HotModuleReplacementPlugin());

  config.devtool = 'source-map';

  config.devServer = {
    inline: true,
    contentBase: './dev',
    hot: true,
    port: 8080,
    historyApiFallback: true
  };
} else {
  config.output.path = path.join(__dirname, 'release');

  config.plugins.push(new UglifyJsPlugin());
  config.plugins.push(new IgnorePlugin(/^\.\/locale$/, /moment$/));
  
  // config.plugins.push(new CompressionPlugin({ // compression
  //   asset: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   test: /\.js$|\.css$|\.html$/,
  //   threshold: 10240,
  //   minRatio: 0.8
  // }));

  config.plugins.push(new HtmlWebpackPlugin({
    template: './src/site/index.html',
    filename: 'site/index.html',
    favicon: './dev/images/favicon.ico',
    inject: 'body',
    chunks: [ENTRY]
  }));

  config.devtool = 'source-map';
}

module.exports = config;
