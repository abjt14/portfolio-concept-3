const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			}
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, './')
		},
		compress: true,
		port: 9000
	}
}