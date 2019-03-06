const SHA256 = require('crypto-js/sha256');
const { APP_SECRET } = require('../../secrets');
//string = enhance input str by add shit, increase complexity & prevent against brute force ATTACks
const hash = string => {
  return SHA256(`${APP_SECRET}${string}${APP_SECRET}`).toString();
};

module.exports = { hash };
