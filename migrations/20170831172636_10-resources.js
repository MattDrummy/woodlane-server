
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('title_link').notNullable();
    table.text('subtext');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resources');

};
