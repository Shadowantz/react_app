const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.scss', 'css'],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|svg)$/,
				include: [
					path.resolve(rootDir, 'src', 'images'),
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash]/[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			hash: true,
			cache: false,
			template: './src/index.html',
			filename: 'index.html',
		}),
		new EnvironmentPlugin({
			versionInfo: Date(), // adds a date version tab
		}),
	],
};
