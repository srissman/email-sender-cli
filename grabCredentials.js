'use strict';

const fs = require('fs'),
    configFile = fs.readFileSync(process.env.HOME + "/" + ".email-sender-cli-user-config", 'utf8');

function parseCFG(string) {
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.replace(/\"/g,'\\"').match(/^(\w+)\s?=\s?(.*)$/) ) {
            section[match[1]] = match[2];
        }  else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}
  
module.exports = {
    parseCFG: parseCFG(configFile)
}