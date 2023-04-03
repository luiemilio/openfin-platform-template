const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
	{
		entry: './client/src/app.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: 'app-bundle.js',
			path: path.resolve(__dirname, 'public', 'build')
		},
		experiments: {
			topLevelAwait: true
		}
	},
	{
		entry: './client/src/provider.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		output: {
			filename: 'provider-bundle.js',
			path: path.resolve(__dirname, 'public', 'build')
		},
		experiments: {
			topLevelAwait: true
		}
	},
	{
		entry: './server/src/index.ts',
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			fallback: {
				"path": false
			}
		},
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'server', 'build')
		},
		experiments: {
			topLevelAwait: true
		},
		target: 'node', 
		externals: [nodeExternals()]
	}
];