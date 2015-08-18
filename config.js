var argv = require('minimist')(process.argv.slice(2))

var configName = 'kryptonite'
var command

if (argv._.length === 2) {
	configName = argv._[0]
	command = argv._[1]
} else {
	command = argv._[0]
}

module.exports = require('rc')(configName, {
	command: command,
	appName: configName,
	generatedKeyFilename: '.' + configName + 'rc'
}, argv)