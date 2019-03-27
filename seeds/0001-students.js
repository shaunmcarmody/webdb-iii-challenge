exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Shaun Carmody', cohort_id: 1},
        {id: 2, name: 'Arshak Asriyan', cohort_id: 1},
        {id: 3, name: 'Sem Limi', cohort_id: 1}
      ]);
    });
};

