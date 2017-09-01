
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weekly_scriptures', (table) => {
    table.increments();
    table.text('verse').notNullable();
    table.text('verse_link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('weekly_scriptures');

};
