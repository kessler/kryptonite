var argv = require('minimist')(process.argv.slice(2))

var configName = 'kryptonite'
var command

if (argv._.length === 2) {
	configName = argv._[0]
	command = argv._[1]
} else if (argv._.length === 1) {
	command = argv._[0]
} else {
	console.error('invalid or missing arguments')
	console.error(require('./usage'))
	process.exit(1)
}

module.exports = require('rc')(configName, {
	command: command,
	appName: configName,
	generatedKeyFilename: '.' + configName + 'rc'
}, argv)