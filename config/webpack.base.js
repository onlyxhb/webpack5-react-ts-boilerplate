/** @format */

const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getLessLoaderOption = function ({ cssModules = false }) {
  const lessLoaderOption = [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        modules: cssModules
          ? {
              mode: 'local',
              localIdentName: '[local]--[hash:base64:5]'
            }
          : false,
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'less-loader',
      options: {
        sourceMap: true,
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
  return lessLoaderOption
}

module.exports = {
  entry: {
    index: ['react-hot-loader/patch'].concat([path.resolve(__dirname, '../src/index.tsx')])
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: `/`,
    filename: 'assets/js/[name].[contenthash:8].js',
    chunkFilename: 'assets/js/[name].[contenthash:8].js',
    sourceMapFilename: 'assets/js/[name].[contenthash:8].js.map'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, '../src/')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // externals: ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper|tapable)\/).*/,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, '../node_modules'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                modifyVars: {
                  'primary-color': '#29b6b0'
                },
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.module\.less$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: getLessLoaderOption({
          cssModules: true
        })
      },
      {
        test: /\b((?!module)\w)+\b\.less$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: getLessLoaderOption({
          cssModules: false
        })
      },
      {
        test: /\.(svg|png|jpg|gif|ttf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 2 * 1024,
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // 强制执行所有必须模块的整个路径，匹配磁盘上实际路径的确切大小写, 避免大小写问题引起的麻烦
    new CaseSensitivePathsPlugin(),
    // 进度条插件
    new WebpackBar(),
    // html插件
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: false
    })
  ]
}
