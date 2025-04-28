const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {


	console.log('Congratulations, your extension "mylang-highlighter" is now active!');

}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}