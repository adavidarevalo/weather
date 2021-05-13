const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
  entry:{
    js: "./src/index.js"
  },
  output:{
    filename: "[name].js",
  },
  module:{
    rules:[
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/i,
        use:{
          loader: "html-loader",
          options:{
            minimize: true,
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test:/\.(png|svg|jpe?g|gif)$/i,
        use:["file-loader"]
      },
      {
        test:/\.(woff|woff2)$/i,
        use:{
          loader: "url-loader",
          options:{
            limit: 10000,
            minetype: "application/font-woff",
            name:"[name].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chumks: ["js"]
    }),
    new MiniCssExtractPlugin(),
  ]
}