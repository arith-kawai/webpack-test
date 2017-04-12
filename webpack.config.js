var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: path.resolve(__dirname, "src/js/app.js"),
     output: {
	path: path.resolve(__dirname, "public/js"),
	//publicPath: "http://localhost:8889/assets/",
         filename: 'app.js'
     },
     module: {
         loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
	]
     },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: path.resolve(__dirname, 'public/index.html'),
      template: 'src/index.html'
    })
  ],
devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		inline: true,
		hot: true,
		port: 8889
	}
 };
