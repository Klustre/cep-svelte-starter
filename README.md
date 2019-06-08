# Svelte Starter

This is a simple starter for [Svelte](https://svelte.dev) in Adobe [CEP](https://github.com/Adobe-CEP/CEP-Resources) using [Webpack](https://github.com/webpack/webpack). Huge thanks to [Koen Schmeets](https://github.com/vespakoen) for helping out with Webpack.

# Features

- Automatically generates `manifest.xml` and `.debug`
- Bundles Extendscript, Javascript and Svelte code
- Supports multiple extensions in the extension bundle
- Allows separate Extendscript files for each Adobe CC app
- Includes Adobe's [Spectrum CSS](https://github.com/adobe/spectrum-css)
- Symlinks the panel to the extensions folder 
- Sets the CSXS debug flags
- Watches files for changes
- Does HMR (Hot Module Replacement)
- Extracts CSS from Svelte components to a single CSS file

# Getting Started

### Clone the starter with [Degit](https://github.com/Rich-Harris/degit).
This clones the repo without all the Git history.
```bash
npx degit Klustre/cep-svelte-starter my-svelte-panel
```

### Install dependencies
```bash
cd my-svelte-panel
npm install
```

### Start the dev environment
```bash
npm start
```

### Open your favorite Adobe CC app
And start developing 👍

# Webpack and CEP-Bundler

The bundler automatically:
- Starts a local server
- Generates the `manifest.xml` and `.debug` files
- Symlinks the `/dist` folder to the current user's extensions folder
- Copies Node `dependencies` to `/dist/node_modules`
- Copies everything in `/public` to `/dist`

*Learn more at [Webpack](https://github.com/webpack/webpack) and [cep-bundler-webpack](https://github.com/adobe-extension-tools/cep-bundler-webpack)*

## Configuring CEP-Bundler

`panel.config.js` & `extendscript.config.js`

TODO

## Hot Module Replacement
TODO
