#!/usr/bin/env node

if (require.main !== module) {
	throw new Error('this is a cli tool')
}

var command = process.argv[2]

if (!command) {
	console.error('missing a command, try:\n\ngenerateKey, encrypt, decrypt, hmac\n')
	process.exit(1)
}

require('./' + command)