/** @format */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          // 只导入需要的 polyfill
          useBuiltIns: 'usage',
          // 指定 corjs 版本
          corejs: 3,
          // 禁用模块化方案转换
          modules: false
        }
      ],
      'react-app'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-optional-chaining',
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ],
    env: {
      development: {
        presets: [['@babel/preset-react', { development: true }]]
      },
      production: {
        presets: ['@babel/preset-react'],
        plugins: [
          'babel-plugin-dev-expression',
          '@babel/plugin-transform-react-constant-elements',
          '@babel/plugin-transform-react-inline-elements'
        ]
      }
    }
  }
}
