
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sermonparagraph', (table) => {
    table.increments();
    table.text('paragraph').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sermonparagraph');

};
