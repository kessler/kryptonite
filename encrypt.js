var fs = require('fs')
var crypto = require('crypto')
var expect = require('./expect')
var config = require('./config.js')
expect(config, ['key', 'iv'])

var key = new Buffer(config.key, 'base64')
var iv = new Buffer(config.iv, 'base64')

// this kind of encryption is an involution?
// need to dive into that deeper to understand
var cipher = crypto.createCipheriv('aes-128-ctr', key, iv)

process.stdin.pipe(cipher)

cipher.pipe(process.stdout)

if (config.file) {
 	cipher.pipe(fs.createWriteStream(config.file))
}
