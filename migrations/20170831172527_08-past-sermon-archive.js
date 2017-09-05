
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pastsermonarchive', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('title_link').notNullable();
    table.text('series_title').notNullable();
    table.text('scripture').notNullable();
    table.text('scripture_link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pastsermonarchive');

};
