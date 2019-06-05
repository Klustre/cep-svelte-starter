import * as csInterface from 'cep-interface'
import App from './App.svelte'
require('@adobe/spectrum-css/dist/icons/loadIcons')(
	'node_modules/@adobe/spectrum-css/dist/icons/spectrum-css-icons-medium.svg'
)

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
