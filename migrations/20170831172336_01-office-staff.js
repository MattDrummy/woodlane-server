
exports.up = function(knex, Promise) {
  return knex.schema.createTable('office_staff', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('role').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('office_staff');

};
