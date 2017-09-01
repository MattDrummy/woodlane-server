
exports.up = function(knex, Promise) {
  return knex.schema.createTable('worship_scehdule', (table) => {
    table.increments();
    table.text('date').notNullable();
    table.text('title').notNullable();
    table.text('sermon_link').notNullable();
    table.text('scripture').notNullable();
    table.text('scripture_link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('worship_scehdule');

};
