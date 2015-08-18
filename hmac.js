var crypto = require('crypto')
var expect = require('./expect')
var config = require('./config.js')
expect(config, ['hmacKey'])

var hmac = crypto.createHmac('sha1', new Buffer(config.hmacKey, 'base64'))
hmac.setDefaultEncoding('base64')
hmac.setEncoding('base64')

process.stdin.pipe(hmac).pipe(process.stdout)
