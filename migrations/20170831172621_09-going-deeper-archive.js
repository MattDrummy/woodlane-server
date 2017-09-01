
exports.up = function(knex, Promise) {
  return knex.schema.createTable('going_deeper', (table) => {
    table.increments();
    table.text('question').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('going_deeper');

};
