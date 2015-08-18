var configName = 'kryptonite'

// a little hack 
if (process.argv[3] && process.argv[3][0] !== '-') {
	configName = process.argv[3]
}

module.exports = require('rc')(configName)