const Session = require('../account/session');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');
//set user session cookie
//express res obj has cookie setting method on it
const setSession = ({ username, res }) => {
  return new Promise((resolve, reject) => {
    const session = new Session({ username });
    const sessionString = session.toString();

    AccountTable.updateSessionId({
      sessionId: session.id,
      usernameHash: hash(username)
    })
      .then(() => {
        res.cookie('sessionString', sessionString, {
          expire: Date.now() + 18000000,
          httpOnly: true
          // secure: true //use with https!
        });
        resolve({ message: 'session created' });
      })
      .catch(err => reject(err));
  });
};

module.exports = { setSession };
