import path from 'path';
import webpack from 'webpack';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
// import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const config: Configuration = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.m?js/,
				resolve: {
					fullySpecified: false,
				},
			},
			// Handle our workers
			{
				// test: /\.worker\.(c|m)?(js|ts)$/i,
				test: /\.worker\.ts$/,
				loader: 'worker-loader',
				options: {
					publicPath: './src/service/wpa/webWorkers/',
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: [/node_modules/],
				use: ['ts-loader'],
			},
			{
				test: /\.(css|scss)$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									[
										'postcss-preset-env',
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|webp|tiff?)$/i,
				use: [
					'file-loader',
					{
						loader: 'webpack-image-resize-loader',
						options: {
							width: 1000,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('developement'),
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new WorkboxPlugin.InjectManifest({
			swSrc: './src/service-worker.js',
			swDest: 'service-worker.js',
			maximumFileSizeToCacheInBytes: 80000000000,
			exclude: [/\.DS*/],
		}),
		// new ImageMinimizerPlugin({
		// 	minimizerOptions: {
		// 		// Lossless optimization with custom option
		// 		// Feel free to experiment with options for better result for you
		// 		plugins: [
		// 			['gifsicle', { interlaced: true }],
		// 			['jpegtran', { progressive: true }],
		// 			['optipng', { optimizationLevel: 5 }],
		// 			[
		// 				'svgo',
		// 				{
		// 					plugins: [
		// 						{
		// 							removeViewBox: false,
		// 						},
		// 					],
		// 				},
		// 			],
		// 		],
		// 	},
		// }),
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: path.resolve(__dirname, './public') }],
		}),
		new Dotenv(),
		new ESLintPlugin({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		// contentBase: path.join(__dirname, 'build'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
};

export default config;
