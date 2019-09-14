exports.up = knex =>
  knex.schema.createTable('student', (table) => {
    table.string('id').primary();
    table.string('namee');
    table.string('lastname');
    table.string('cellphone');
    table.string('mail');
    table.string('code');
    table.string('faculty');
    table.string('programm');
    table.string('semester');
  });

exports.down = knex => knex.schema.dropTable('student');
