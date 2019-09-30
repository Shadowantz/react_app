const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

module.exports = merge(common, {
	output: {
		path: path.resolve(rootDir, 'dist'),
		filename: 'js/[name].[hash].js',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							path: '../style',
						},
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname, 'config'),
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style/style.[hash].css',
		}),
		new CleanWebpackPlugin(),
	],
});
