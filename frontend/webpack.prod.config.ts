import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
// import TerserPlugin from 'terser-webpack-plugin';

const config: webpack.Configuration = {
	mode: 'production',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		publicPath: '',
	},
	// optimization: {
	// 	minimize: true,
	// 	minimizer: [new TerserPlugin()],
	// },
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
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
				exclude: /node_modules/,
				use: ['ts-loader'],
			},
			{
				test: /\.css$/i,
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
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new WorkboxPlugin.InjectManifest({
			swSrc: path.join(process.cwd(), './src/service-worker.js'),
			swDest: 'service-worker.js',
			exclude: [/\.DS*/],
			maximumFileSizeToCacheInBytes: 80000000,
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ImageMinimizerPlugin({
			minimizerOptions: {
				plugins: [
					['gifsicle', { interlaced: true }],
					['jpegtran', { progressive: true }],
					['optipng', { optimizationLevel: 5 }],
					[
						'svgo',
						{
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					],
				],
			},
		}),
		new ESLintPlugin({
			extensions: ['ts', 'tsx'],
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: path.resolve(__dirname, './public') }],
		}),
		new Dotenv(),
	],
};

export default config;
