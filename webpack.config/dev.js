const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');  // 将各个分开的配置项合并在一起
const HtmlWebpackPlugin = require('html-webpack-plugin'); // js入口文件自动注入

const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径

const config = require('./config');
const baseConfig = require('./base');

module.exports = merge(baseConfig, {
  output: {
    publicPath: '/'  // 处理静态资源引用地址
  },
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    port: config.port // 服务器端口
  },
  devtool: 'cheap-module-eval-source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // webpack内置的插件，添加热替换插件，添加热替换配置，每次改动文件不会再整个页面都刷新
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'), // 模板文件
      inject: 'body', // js的script注入到body底部
      favicon: path.join(root,'src/assets/images/favicon.ico')
    })
  ]
});

