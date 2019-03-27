const router = require('express').Router();

const db = require('../knexfile.js');

router.get('/', (req, res) => {
  db('cohorts')
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res.status(500).json(err);      
    });
});

router.post('/', (req, res) => {
  db('cohorts')
    .insert(req.body)
    .then(ids => {
      db('cohorts')
        .where({ id: ids[0] })
        .then(cohort => {
          res.status(201).json(cohort);
        })
    })
    .catch(err => {
      res.status(500).json(err);      
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('cohorts')
    .where({ id })
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(err => {
      res.status(500).json(err);      
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  db('cohorts')
    .where({ id })
    .update(req.body)
    .then(resource => {
      if (!resource) {
        return res.status(404).json({ message: "ID not found" });
      }
      db('cohorts')
        .where({ id })
        .then(cohort => {
          res.status(200).json(cohort);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id/students', (req, res) => {
  const { id } = req.params;
  db('cohorts')
    .innerJoin('students', 'cohorts.id', 'students.cohort_id')
    .where('cohort_id', id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json(err)
    });
});

module.exports = router;