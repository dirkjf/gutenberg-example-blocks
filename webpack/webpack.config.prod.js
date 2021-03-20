const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const commonConfig = require('./webpack.common')
const TerserPlugin = require("terser-webpack-plugin");
const yamlImporter = require('node-sass-yaml-importer');
const {merge} = require('webpack-merge');

module.exports = () => {
  const config = {
    output: {
      filename: '[name].[contenthash].js',
      publicPath: ""
    },
    mode: 'production',
    watch: true,
    devtool: 'cheap-source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
            keep_fnames: true
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader',
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  importer: yamlImporter
                },
              },
            },
          ]
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
      new CssMinimizerPlugin()
    ],
  }
  return merge(commonConfig, config)
};
