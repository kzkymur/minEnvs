import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
	mode: 'development',
	entry: src + '/index.tsx',

	output: {
		path: dist,
		publicPath: "/",
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader'],
			},
      {
        test: /\.(t|j)(s|sx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
		]
	},

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: { '@': src },
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

