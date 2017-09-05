
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goodnewsarchive', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('link').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goodnewsarchive');

};
