const path = require('path');
const autoprefixer = require('autoprefixer'); // 自动添加浏览器前缀
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const root = path.resolve(__dirname, '..'); // 项目的根目录绝对路径

module.exports = {
  entry: ['babel-polyfill',path.join(root, 'src/main.js')],  // 入口文件路径
  output: {
    path: path.join(root, 'dist'),  // 所有输出文件的目标路径，必须是绝对路径
    filename: 'main.js',  // 出口文件名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            extractCSS: true, // 提取css文件
            css: {
              use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader',
                }
              ],
              fallback: 'vue-style-loader'
            }
          },
          postcss: [
            autoprefixer({
              browsers: ['last 10 Chrome versions', 'Firefox > 20', 'Safari >= 6', 'ie >= 9']
            })
          ]
        }
      },
      // 处理js中引入的css
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            }
          ]
      },
      // 处理js中引入的scss
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // 路径要与当前配置文件下的publicPath相结合
          name: 'images/[name].[ext]?[hash:5]',
        }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
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
      directives: path.join(root, 'src/directives'),
      views: path.join(root, 'src/views')
    },
    extensions: ['.js', '.vue'] // 引用js和vue文件可以省略后缀名
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      allChunks: true
    })
  ]
};