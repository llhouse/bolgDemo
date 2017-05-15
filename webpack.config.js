let webpack = require('webpack');

const config = {
	entry: {
		main: "./src/test.js"
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/static",
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.jsx?$/,
			use: 'babel-loader',
			exclude: /node_modules/
		}， {
			test: /\.json$/,
			use: 'json-loader'
		}]
	}
}

module.exports = config;