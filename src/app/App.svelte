<svelte:head>
	<link rel="stylesheet" href="./node_modules/@adobe/spectrum-css/dist/spectrum-core.css">
	<link rel="stylesheet" href="./node_modules/@adobe/spectrum-css/dist/spectrum-darkest.css">
	<link rel="stylesheet" href="./global.css">
</svelte:head>

<script>
	import { time, elapsed, prefix } from './store.js'
	import * as csInterface from 'cep-interface'
	import * as pkg from '../../package.json'
	import Say from '../components/Say.svelte'

	export let name

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	})

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

<main class="spectrum spectrum--darkest">
	<Say value="Oh" />
	<h1>Hello {$prefix} {name}!</h1>
	<input type="text" placeholder="Prefix" name="field" bind:value={$prefix} class="spectrum-Textfield spectrum-Textfield--quiet">
	<input type="text" placeholder="Enter your name" name="field" bind:value={name} class="spectrum-Textfield spectrum-Textfield--quiet">

	<h3>The time is {formatter.format($time)}</h3>

	<p>
		The panel has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
	</p>

	<button class="spectrum-ActionButton spectrum-ActionButton--quiet" on:click={helloSpectrum}>
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Info">
        <use href="#spectrum-css-icon-InfoMedium" />
      <span class="spectrum-ActionButton-label">Info</span>
      </svg>
	</button>

	<button class="spectrum-ActionButton" on:click={helloExtendscript}>
		<span class="spectrum-ActionButton-label">Hello Extendscript</span>
	</button>

	<button class="spectrum-ActionButton" on:click={helloNode}>
		<span class="spectrum-ActionButton-label">Hello Node</span>
	</button>
</main>

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

	input, p {
		margin-bottom: 20px;
	}
</style>
