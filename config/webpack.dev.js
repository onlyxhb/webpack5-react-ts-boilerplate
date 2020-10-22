/** @format */

const path = require('path')
const resolve = require('resolve')
const { merge } = require('webpack-merge')
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin')
const typescriptFormatter = require('react-dev-utils/typescriptFormatter')
const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  // 开发服务配置
  devServer: {
    host: '0.0.0.0',
    port: 10086,
    publicPath: '/',
    disableHostCheck: true,
    useLocalIp: true,
    open: true,
    overlay: true,
    hot: true,
    stats: {
      assets: false,
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      entrypoints: false
    },
    historyApiFallback: true
  },
  plugins: [
    // ts检查插件
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: path.resolve(__dirname, '../node_modules')
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      resolveModuleNameModule: undefined,
      resolveTypeReferenceDirectiveModule: undefined,
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      reportFiles: ['**', '!**/__tests__/**', '!**/?(*.)(spec|test).*', '!**/src/setupProxy.*', '!**/src/setupTests.*'],
      silent: false,
      formatter: typescriptFormatter
    })
  ]
})
