const path = require('path')
const { createConfig } = require('cep-bundler-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = !!process.env.IS_DEV
const dest = path.join(__dirname, 'dist')

const config = createConfig({
	type: 'cep',
	id: 'cep.svelte.webpack',
	entry: './src/main.js',
	out: dest,
	isDev: isDev,
	devPort: 8080,
})

config.resolve.mainFields = ['svelte', 'browser', 'module', 'main']
config.resolve.extensions.concat(['.mjs', '.js', '.svelte'])

config.module.rules.push({
	test: /\.(html|svelte)$/,
	exclude: /node_modules/,
	use: 'svelte-loader'
})

// Extracting CSS Fails
// config.module.rules.push({
// 	test: /\.(html|svelte)$/,
// 	exclude: /node_modules/,
// 	use: {
// 		loader: 'svelte-loader',
// 		options: {
// 			emitCss: true,
// 		},
// 	},
// })

// config.module.rules.push({
// 	test: /\.css$/,
// 	use: [
// 		/**
// 		 * MiniCssExtractPlugin doesn't support HMR.
// 		 * For developing, use 'style-loader' instead.
// 		 * */
// 		!isDev ? MiniCssExtractPlugin.loader : 'style-loader',
// 		'css-loader'
// 	]
// })

// console.log(config.plugins)
// config.plugins.push(new MiniCssExtractPlugin({
// 	filename: '[name].css'
// }))

config.output = {
	path: dest,
	filename: '[name].js',
	chunkFilename: '[name].[id].js'
}

module.exports = config
