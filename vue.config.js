// npm install --save-dev webpack-bundle-analyzer  webpack打包体积优化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// node.js 路径处理模块；文件路径分解／组合 path.join([…paths]) ／ path.resolve([…paths])； __dirname：node全局变量，存储的是文件所在的文件目录
const path = require('path')

module.exports = {
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8778,
    // 设置代理
    proxy: {
      'operation': {
        target: 'http://localhost:8778/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // webpack配置
  configureWebpack: config => {
    config.externals = {
      go: 'go',
      echarts: 'echarts'
    }
    config.resolve = {
      // 会取代默认的模块扩展名，意味着webpack不再用默认扩展名查找模块. import Hello from '@components/Hello'; 引入hello.vue
      extensions: ['.js', '.vue', '.json'],
      // 设置路径别名
      alias: {
        'vue': 'vue/dist/vue.common.js',
        '@': path.resolve(__dirname, 'src')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate config for development...
    }
    if (process.argv[3] === 'analyse') {
      // 引入插件
      config.plugins.push(new BundleAnalyzerPlugin())
    }
  }
}
