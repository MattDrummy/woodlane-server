
exports.up = function(knex, Promise) {
  return knex.schema.createTable('officestaff', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('role').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('officestaff');

};
