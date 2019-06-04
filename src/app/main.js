import * as csInterface from 'cep-interface'
import App from './App.svelte'

const bundle = require(`!!raw-loader!../../dist/extendscript.js`)
csInterface.evalExtendscript(bundle.default)

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte'
	}
})

window.app = app

export default app
