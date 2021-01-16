/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable sort-keys */
const path = require('path');
const sentryToken = require('./sentryToken');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HookShellScriptPlugin = require('hook-shell-script-webpack-plugin');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const outputDir = path.resolve('./dist');

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
	analyzerMode: 'server',
	analyzerPort: 8989,
});
const cleanWebpackPlugin = new CleanWebpackPlugin();
const scriptPlugin = new HookShellScriptPlugin({ afterEmit: ['node ./updateBundleFilename.js'] });
const manifestPlugin = new WebpackManifestPlugin({
	filter: (file) => file.name === 'main.js',
});
const sentryPlugin = new SentryWebpackPlugin({
	authToken: sentryToken,
	include: '.',
	ignore: ['node_modules', 'webpack.config.js'],
	org: 'cnn',
	project: 'cnn_academy',
});
const productionPlugins = [bundleAnalyzerPlugin, cleanWebpackPlugin, manifestPlugin, sentryPlugin];
const devPlugins = [cleanWebpackPlugin, manifestPlugin, scriptPlugin];

module.exports = {
	mode: process.env.NODE_ENV,
	entry: path.resolve('./src/index.tsx'),
	output: {
		filename: '[name].[contenthash].js',
		path: outputDir,
		publicPath: 'auto',
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'babel-loader', include: path.resolve('./src') },
			{
				test: /\.css$/,
				loader: 'style-loader',
			},
			{
				test: /\.css$/,
				loader: 'css-loader',
			},
			{
				test: /\.(png|jpg|jpeg|mp4|fbx|woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: process.env.NODE_ENV === 'production' ? productionPlugins : devPlugins,
	devtool: 'source-map',
	devServer: { historyApiFallback: true },
	stats: {
		colors: true,
		reasons: true,
		chunks: true,
	},
};
