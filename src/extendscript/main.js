function showAlert() {
    var app = appName()
	alert('Alert from ' + app)
}

function appName() {
	var name = BridgeTalk.appName
	if (name === 'aftereffects') return 'AEFT'
	if (name === 'premierepro') return 'PPRO'
	throw new Error('Unsupported App')
}

$.global['cep.svelte.webpack'] = {
	showAlert: showAlert,
	appName: appName,
}
