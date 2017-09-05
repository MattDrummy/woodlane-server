
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goingdeeper', (table) => {
    table.increments();
    table.text('question').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goingdeeper');

};
