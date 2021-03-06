#!/usr/bin/env node

if (require.main !== module) {
	throw new Error('this is a cli tool')
}

var command = require('./config').command

if (!command) {
	console.error('missing a command, try:')
	console.error(require('./usage'))
	process.exit(1)
}

if (command === 'decrypt') {
	require('./encrypt')
} else {
	require('./' + command)
}