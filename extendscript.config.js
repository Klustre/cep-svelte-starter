const path = require('path')
const { createConfig } = require('cep-bundler-webpack')

const config = createConfig({
	out: path.join(__dirname, 'dist'),
	type: 'extendscript',
	entry: './src/extendscript/main.js',
	isDev: !!process.env.IS_DEV,
})

module.exports = config
