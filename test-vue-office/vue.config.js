const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 禁用构建时的 ESLint 检查
  
  chainWebpack: (config) => {
    // 可选：移除 ESLint 加载器（如果上面的配置不生效）
    config.module.rules.delete('eslint');
  }
})
