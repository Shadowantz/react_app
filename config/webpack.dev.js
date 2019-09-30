const path = require('path');
const merge = require('webpack-merge');

const rootDir = path.resolve(__dirname, '..');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: rootDir,
		historyApiFallback: true,
		hot: true,
		overlay: {
			warnings: false,
			errors: true,
		},
		stats: 'minimal',
		host: '0.0.0.0',
	},
	devtool: 'cheap-source-map',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					configFile: path.resolve(__dirname, '.eslintrc'),
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname, 'config'),
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'style/fonts',
					},
				}],
			},
		],
	},
});
