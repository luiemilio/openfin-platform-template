const resolve = require('path').resolve;

const path = resolve(__dirname, '..', 'public', 'build');
const extensions = ['.tsx', '.ts', '.js'];
const experiments = { topLevelAwait: true };
const devtool = 'inline-source-map';
const rules = [
	{
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	}
]

module.exports = [
	{
		entry: './client/src/app.ts',
		devtool,
		module: { rules },
		resolve: {
			extensions
		},
		output: {
			filename: 'app-bundle.js',
			path
		},
		experiments
	},
	{
		entry: './client/src/provider.ts',
		devtool,
		module: { rules },
		resolve: {
			extensions
		},
		output: {
			filename: 'provider-bundle.js',
			path
		},
		experiments
	}
];