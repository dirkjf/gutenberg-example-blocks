const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const DependencyExtractionWebpackPlugin = require('@wordpress/dependency-extraction-webpack-plugin');
const yamlImporter = require('node-sass-yaml-importer');

const entries = require('./entries');

module.exports = {
  entry: entries,
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      main: path.resolve(__dirname, '../assets/main'),
      config: path.resolve(__dirname, '../config'),
    }
  },
  output: {
    path: path.resolve(__dirname, "../public/build/"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          "css-loader",
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
      {
        test: /\.ya?ml$/,
        type: 'json', // Required by Webpack v4
        use: 'yaml-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DependencyExtractionWebpackPlugin({
      // Only replace all wordpress modules, but ignore the other defaults.
      // For a list of defaults see: https://github.com/WordPress/gutenberg/tree/master/packages/dependency-extraction-webpack-plugin.
      useDefaults: false,
      requestToExternal: function (module) {
        if (module.startsWith('@wordpress/')) {
          return ['wp', module.substring('@wordpress/'.length).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
          ];
        }
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitignore'] // Prevent '.gitignore' to be removed.
    })
  ],
}
