const router = require('express').Router();

const db = require('../knexfile.js');

router.get('/', (req, res) => {
  db('students')
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;