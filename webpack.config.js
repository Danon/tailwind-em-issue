const path = require('path');
const {HotModuleReplacementPlugin} = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const postcssOptions = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
  ],
};

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env', "@babel/preset-react"],
        babelrc: false
      }
    }
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {postcssOptions}
      },
      'sass-loader'
    ],
  },
  {
    test: /\.(png|jpe?g)$/,
    loader: 'file-loader',
  },
];

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  }
});
