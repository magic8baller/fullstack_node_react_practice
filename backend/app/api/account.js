const { Router } = require('express');
const AccountTable = require('../account/table');
const { hash } = require('../account/helper');
const router = new Router();

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  const usernameHash = hash(username);
  const passwordHash = hash(password);

  // first get account to check if account exists before deciding to store as 'new'
  AccountTable.getAccount({ usernameHash })
    .then(({ account }) => {
      //if account is undef
      if (!account) {
        return AccountTable.storeAccount({ usernameHash, passwordHash });
      } else {
        const error = new Error('This account already exists');
        //conflict with existing data
        error.statusCode = 409;
        // next(error);
        throw error;
      }
    })
    //chain down here instead of leaving with storeAccount - bc result of .then handler itself
    //returning promise to outer scope
    .then(() => res.json({ message: 'SUCCE$$$$$$$$FUL account storage' }))
    .catch(error => next(error));
});

module.exports = router;
