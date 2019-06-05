<svelte:head>
	<link rel="stylesheet" href="./node_modules/@adobe/spectrum-css/dist/spectrum-core.css">
	<link rel="stylesheet" href="./node_modules/@adobe/spectrum-css/dist/spectrum-darkest.css">
	<style>
		* {
			padding: 0;
			margin: 0;
		}

		html,
		body {
			width: 100vw;
			height: 100vh;
			user-select: none;
			cursor: default;
		}
	</style>
</svelte:head>

<main class="spectrum spectrum--darkest">
	<h1>Hello {name}!</h1>

	<button class="spectrum-ActionButton" on:click={helloExtendscript}>
		<span class="spectrum-ActionButton-label">Hello Extendscript</span>
	</button>

	<button class="spectrum-ActionButton" on:click={helloNode}>
		<span class="spectrum-ActionButton-label">Hello Node</span>
	</button>
	
	<button class="spectrum-ActionButton spectrum-ActionButton--quiet" on:click={helloSpectrum}>
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Info">
        <use href="#spectrum-css-icon-InfoMedium" />
      <span class="spectrum-ActionButton-label">Info</span>
      </svg>
    </button>
</main>

<script>
	import * as csInterface from 'cep-interface'
	import * as pkg from '../../package.json'

	export let name

	function helloExtendscript() {
		const host = `$.global["${pkg.cep.id}"]`
		csInterface.evalExtendscript(`${host}.appName()`)
			.then(id => alert(`The host app is "${id}"`))
	}

	function helloNode() {
		const os = require('os')
		const user = os.userInfo().username
		alert(`Hello from Node, ${user}`)
	}

	function helloSpectrum() {
		alert('Spectrum with icons \\o/')
	}
</script>

<style>
	h1 {
		color: white;
		margin-bottom: 20px;
	}

	main {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 50px;
	}
</style>
