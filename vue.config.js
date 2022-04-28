const { defineConfig } = require('@vue/cli-service')

const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/rca_project_demo'
  : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: BASE_URL
})
