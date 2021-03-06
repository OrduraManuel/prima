module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        '.src/assets/scss/style.scss'
      ]
    }
  }
}
