const path = require("path");
const fs = require('fs')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');

// Reads the YAML file that contains the configuration for the webpack dev server.
let webpack_config = ''
try {
  const data = fs.readFileSync(path.resolve(__dirname, '../config/webpack.yaml'), 'utf8')
  webpack_config = JSON.parse(require('yaml-loader')(data));
} catch (err) {
  console.error(err)
}

module.exports = () => {
  const config = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, "../public/build/"),
      filename: '[name].js',
      publicPath: webpack_config.dev_asset_path,
    },
    devtool: 'eval',
    optimization: {
      runtimeChunk: "single",
      minimize: false,
    },
    plugins: [
      new ReactRefreshPlugin(),
    ],
    devServer: {
      port: webpack_config.dev_port,
      firewall: false,
      headers: {"Access-Control-Allow-Origin": "*"},
      static: [path.resolve(__dirname, "/public/build/")],
      proxy: {
        "/": {
          target: webpack_config.dev_url,
          secure: false,
          changeOrigin: true,
          autoRewrite: true,
          headers: {
            Connection: 'keep-alive'
          }
        }
      }
    }
  }
  return merge(commonConfig, config)
};
