
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sunday_school_staff', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('role').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sunday_school_staff');

};
