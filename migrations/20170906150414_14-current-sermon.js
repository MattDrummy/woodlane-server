
exports.up = function(knex, Promise) {
  return knex.schema.createTable('currentsermon', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('currentsermon');

};
