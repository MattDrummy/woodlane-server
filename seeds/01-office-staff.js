
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate officestaff restart identity cascade')
    .then(function(){
      return knex('officestaff').insert([
        {
          name: "Rev. Brian Maag",
          role: "Pastor"
        },
        {
          name: "Deb Smith",
          role: "Secretary"
        }
      ])
    })
};
