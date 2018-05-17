'use strict';
var fs = require('fs');
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));
fs.createReadStream('.sample-email-sender-cli-user-config')
  .pipe(fs.createWriteStream(process.env.HOME + "/.email-sender-cli-user-config"));
