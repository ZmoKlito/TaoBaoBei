const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭 eslint 的语法检查
  // eslint 规定 组件的写法 ：
  // Student  => StudentInfo
  lintOnSave:false
})




