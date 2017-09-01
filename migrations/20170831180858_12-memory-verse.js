
exports.up = function(knex, Promise) {
  return knex.schema.createTable('memory_verse', (table) => {
    table.increments();
    table.text('message').notNullable();
    table.text('verse').notNullable();
    table.text('verse_link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('memory_verse');

};
