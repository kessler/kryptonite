var fs = require('fs')
var crypto = require('crypto')
var read = require('read')

function generateKey(key, salt) {

	var result = {}
	
	result.key = crypto.pbkdf2Sync(key, salt, 4096, 16, 'sha256')

	result.hmacKey = crypto.randomBytes(16)

	return result
}

read({ prompt: 'filename:', default: '.kryptoniterc' }, function (err, file) {
	if (err) {
		console.log(err)
		return process.exit(1)
	}

	var readOpts = { prompt: 'secret:', silent: true, replace: '*' }

	read(readOpts, function (err, secret) {
		if (err) {
			console.log(err)
			return process.exit(1)
		}

		if (!secret) {
			secret = crypto.randomBytes(32)
		}

		readOpts.prompt = 'salt:'

		read(readOpts, function (err, salt) {
			if (err) {
				console.log(err)
				return process.exit(1)
			}

			if (!salt) {
				salt = crypto.randomBytes(16)
			}

			var generationResult = generateKey(secret, salt)
			generationResult.key = generationResult.key.toString('base64')
			generationResult.hmacKey = generationResult.hmacKey.toString('base64')
			generationResult.iv = crypto.randomBytes(16).toString('base64')

			fs.writeFileSync(file, JSON.stringify(generationResult))
		})
	})
})
