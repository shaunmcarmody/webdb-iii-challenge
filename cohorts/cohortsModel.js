const router = require('express').Router();

const db = require('../knexfile.js');

router.get('/', (req, res) => {
  db('cohorts')
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;