const { Router } = require('express');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');
const router = new Router();
const { setSession } = require('./helper');

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  const usernameHash = hash(username);
  const passwordHash = hash(password);

  AccountTable.getAccount({ usernameHash })
    .then(({ account }) => {
      if (!account) {
        return AccountTable.storeAccount({ usernameHash, passwordHash });
      } else {
        const error = new Error('This account already exists');

        error.statusCode = 409;

        throw error;
      }
    })

    .then(() => setSession({ username, res }))
    .then(({ message }) => res.json({ message }))
    .catch(error => next(error));
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  AccountTable.getAccount({ usernameHash: hash(username) })
    .then(({ account }) => {
      if (account && account.passwordHash === hash(password)) {
        //return promise
        return setSession({ username, res });
      } else {
        const error = new Error('Incorrect username/password');

        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message }) => res.json({ message }))
    .catch(error => next(error));
});

module.exports = router;
