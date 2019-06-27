function showAlert() {
    var app = appName()
	alert('Alert from ' + app)
}

function appName() {
	return BridgeTalk.appName
}

$.global[process.env.npm_package_cep_id] = {
	showAlert: showAlert,
	appName: appName,
}
