const uuid = require('uuid/v4');
const { hash } = require('./helper');

const SEPARATOR = '|';

class Session {
  constructor({ username }) {
    this.username = username;
    this.id = uuid();
  }

  toString() {
    const { username, id } = this;

    return Session.sessionString({ username, id });
  }
  //can use fn without needing 'new' using static

  static parse(sessionString) {
    const sessionData = sessionString.split(SEPARATOR);
    //return MAP
    return {
      username: sessionData[0],
      id: sessionData[1],
      sessionHash: sessionData[2]
    };
  }

  static verify(sessionString) {
    const { username, id, sessionHash } = Session.parse(sessionString);

    const accountData = Session.accountData({ username, id });

    return hash(accountData) === sessionHash;
  }
  static accountData({ username, id }) {
    return `${username}${SEPARATOR}${id}`;
  }

  static sessionString({ username, id }) {
    const accountData = Session.accountData({ username, id });
    return `${accountData}${SEPARATOR}${hash(accountData)}`;
  }
}

const test = new Session({ username: 'testUser' });
const userString = test.toString();
console.log('Session.parse(userString)', Session.parse(userString));
console.log('Session.verify(userString)', Session.verify(userString));

const fakeUserString = `admin_${userString}`;
console.log('Session.verify(fakeUserString)', Session.verify(fakeUserString));
module.exports = Session;
