const { Router } = require('express');
const AccountTable = require('../account/table');

const router = new Router();

router.post('/signup', (req, res, next) => {
  const { username, pass } = req.body;

  AccountTable.storeAccount({ username, pass })
    .then(r => r.json({ message: 'succe$$ account stored' }))
    .catch(err => next(err));
});

module.exports = router;
