'use strict';

var fs = require('fs');
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));

if (!fs.existsSync(process.env.HOME + "/.email-sender-cli-user-config")) {
  fs.createReadStream('.sample-email-sender-cli-user-config')
    .pipe(fs.createWriteStream(process.env.HOME + "/.email-sender-cli-user-config"));
  console.log("*** New email sender cli user config file written to", process.env.HOME);  
} else {
  console.log("*** Global config file already exists in home directory");
}
