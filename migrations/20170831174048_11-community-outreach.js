
exports.up = function(knex, Promise) {
  return knex.schema.createTable('communityoutreach', (table) => {
    table.increments();
    table.text('name').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('community_outreach');

};
