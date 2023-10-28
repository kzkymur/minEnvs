import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
	mode: 'development',
	entry: src + '/index.jsx',

	output: {
		path: dist,
		publicPath: "/",
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader'],
			}
		]
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: src + '/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		port: 8080,
		historyApiFallback: true, 
	}
}
