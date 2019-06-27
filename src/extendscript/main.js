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

$.global[process.env.npm_package_cep_id] = {
	showAlert: showAlert,
	appName: appName,
}
