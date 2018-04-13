const path = require('path');
const autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径

module.exports = {
  entry: ['babel-polyfill',path.join(root, 'src/main.js')],  // 入口文件路径
  output: {
    path: path.join(root, 'dist'),  // 所有输出文件的目标路径，必须是绝对路径
    filename: 'main.js',  // 出口文件名
  },
  module: { // 配置loader
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true, // 提取css文件
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          },
          postcss: [
            autoprefixer({
              // browsers: ['ie >= 9', 'last 2 versions']
              browsers: ['last 10 Chrome versions', 'Firefox > 20', 'Safari >= 6', 'ie >= 9']
            })
          ]
        }
      },
      // 处理js中引入的css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: "style-loader"
        })
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          // 路径要与当前配置文件下的publicPath相结合
          name: 'images/[name].[ext]?[hash:5]',
        }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash:5]',
          prefix: 'font'
        }
      }
    ]
  },
  resolve: {
    alias: {
      assets: path.join(root, 'src/assets'),
      components: path.join(root, 'src/components'),
      views: path.join(root, 'src/views')
    },
    extensions: ['.js', '.vue'] // 引用js和vue文件可以省略后缀名
  },
  plugins: [
    // 提取css
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash:8].css', allChunks: true
    })
  ]
};