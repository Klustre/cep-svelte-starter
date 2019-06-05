const path = require('path')
const { createConfig } = require('cep-bundler-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.IS_DEV === '1'
const dest = path.join(__dirname, 'dist')

const config = createConfig({
	type: 'cep',
	id: 'cep.svelte.webpack',
	entry: './src/app/main.js',
	out: dest,
	isDev: isDev,
	devPort: 8080,
})

config.resolve.mainFields = ['svelte', 'browser', 'module', 'main']
config.resolve.extensions.concat(['.mjs', '.js', '.svelte'])

config.module.rules = [
	{
		test: /\.(png|svg|jpg|gif)$/,
		use: ['file-loader']
	}, {
		test: /\.(woff|woff2|eot|ttf|otf)$/,
		use: ['file-loader']
	}, {
		test: /\.(html|svelte)$/,
		exclude: /node_modules/,
		use: {
			loader: 'svelte-loader',
			options: {
				emitCss: true,
				hotReload: true
			}
		}
	}, {
		test: /\.css$/,
		use: [
			!isDev ? MiniCssExtractPlugin.loader : 'style-loader',
			'css-loader'
		]
	}
]

config.plugins.push(new MiniCssExtractPlugin({
	filename: '[name].css'
}))

config.output = {
	path: dest,
	filename: '[name].js',
	chunkFilename: '[name].[id].js'
}

module.exports = config
