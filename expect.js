module.exports = function(config, keys) {
	keys.forEach(function (k) {
		if (!config[k]) {
			throw new Error('expecting ' + k + ' in config')
		}
	})
}