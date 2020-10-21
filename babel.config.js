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
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-optional-chaining',
      'transform-class-properties',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      ]
    ]
  }
}
