const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '/backstage':{
        target: 'http://localhost:3333',
        pathRewrite:{
          '^/backstage':''
        }
      }
    }
  }
})
