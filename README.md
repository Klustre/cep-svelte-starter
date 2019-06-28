# Svelte Starter

This is a simple starter for [Svelte](https://svelte.dev) in Adobe [CEP](https://github.com/Adobe-CEP/CEP-Resources) using [Webpack](https://github.com/webpack/webpack). Huge thanks to [Koen Schmeets](https://github.com/vespakoen) for helping out with Webpack.

# Features

- Bundles Extendscript, Javascript and Svelte code
- Automatically generates `manifest.xml` and `.debug`
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
This clones the repo without the whole Git history.
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
Find the extension under `Window > Extensions` and start developing 👍

# Known Issues
- Using Svelte animations throws an error: `TypeError: Illegal invocation`

# Troubleshooting
1. When running `npm start`, Webpack's dev server loads the files in memory instead of building to `/dist`. When you run `npm run build` it builds all files to `/dist`

1. On Windows you'll have to change:
    - `export IS_DEV=1` to `set IS_DEV=1`
    - `sleep 5` to `timeout 5`

1. Using any Svelte modules throws an error where the component is `undefined`. This is likely due to a double inclusion of `svelte/internal`.  

    Possible workarounds:
    - **Import the module from `svelte/internal`**  
    `import { createEventDispatcher } from 'svelte/internal'`
    - **Remove the modules from Svelte after npm install**  
    `"postinstall": "rimraf node_modules/svelte/*.mjs"`

    *See https://github.com/sveltejs/svelte/issues/2896 and https://github.com/DeMoorJasper/parcel-plugin-svelte/issues/46#issuecomment-494556534*

# Webpack and CEP-Bundler

The bundler automatically:
- Starts a local server
- Generates the `manifest.xml` and `.debug` files
- Symlinks the `/dist` folder to the current user's extensions folder
- Copies Node `dependencies` to `/dist/node_modules`
- Copies everything in `/public` to `/dist`

*Learn more at: [Webpack](https://github.com/webpack/webpack) and [cep-bundler-webpack](https://github.com/adobe-extension-tools/cep-bundler-webpack)*

## Configuring CEP-Bundler

`panel.config.js` & `extendscript.config.js`

*See [cep-bundler-core](https://github.com/adobe-extension-tools/cep-bundler-core)*
