
exports.up = knex => (
  knex
    .schema
    .createTable('students', tbl => {
      tbl.increments()

      tbl
        .string('name', 128)
        .notNullable()

      tbl
        .integer('cohort_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
)

exports.down = knex => knex.schema.dropTableIfExistss('students');

