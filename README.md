# kryptonite

A personal cli tool for encryption/decryption

rc config defaults to "kryptonite", but can be overridden using the first paramter before the command (without --), e.g

```
kryptonite myapp encrypt
```

## tools

### kryptonite generateKey
generate a key file that will be used for decrypt / hmac / encrypt tools

```json
{
    "key": "[base64 encoded key]",
    "hmacKey": "[base64 encoded hmac key]",
    "iv": "[base64 encoded iv]",
}
```

### kryptonite encrypt

encrypt something, using default/named config

```
echo '123' | kryptonite encrypt
```

or

```
echo '123' | kryptonite encrypt --file=encrypted.out
```

### kryptonite hmac
create a sha1 signature of something using default / named config

```
echo '123' | kryptonite hmac
```

### kryptonite decrypt

