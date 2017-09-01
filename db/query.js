const knex = require('../db/knex');

module.exports = {
  getTable: (table) => {
    return knex(table);
  },
  
  postToTable: (table, data) => {
    return knex(table).insert(data).returning('*');
  },

  updateTable: (id, update, table) => {
    return knex(table).where('id', id).update(update).returning('*');
  },

  deleteOfficeStaff: (id, table) => {
    return knex(table).where('id', id).del();
  },
}
