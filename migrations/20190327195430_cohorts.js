
exports.up = knex => (
  knex
    .schema
    .createTable('cohorts',tbl => {
      tbl.increments()
      tbl
        .string('name', 128)
        .notNullable()
        .unique()
    })
);

exports.down = knex => knex.schema.dropTableIfExistss('cohorts');