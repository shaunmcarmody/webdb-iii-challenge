const router = require('express').Router();

const db = require('../knexfile.js');

router.get('/', (req, res) => {
  db('students')
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  db('students')
    .insert(req.body)
    .then(ids => {
      db('students')
        .where({ id: ids[0] })
        .then(students => {
          res.status(201).json(students);
        })
    })
    .catch(err => {
      res.status(500).json(err);      
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('students')
    .where({ id })
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json(err);      
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('students')
    .where({ id })
    .update(req.body)
    .then(resource => {
      if (!resource) {
        return res.status(404).json({ message: "ID not found" });
      }
      db('students')
        .where({ id })
        .then(student => {
          res.status(200).json(student);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;