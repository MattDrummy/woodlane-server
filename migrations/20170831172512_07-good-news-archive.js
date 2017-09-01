
exports.up = function(knex, Promise) {
  return knex.schema.createTable('good_news_archive', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('link').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('good_news_archive');

};
