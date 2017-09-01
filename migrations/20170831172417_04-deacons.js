
exports.up = function(knex, Promise) {
  return knex.schema.createTable('deacons', (table) => {
    table.increments();
    table.text('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('deacons');

};
