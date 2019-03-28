const knex = require('knex');

module.exports = knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.sqlite3',
    },
    debug: true
  })