
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate office_staff restart identity cascade')
    .then(function(){
      return knex('office_staff').insert([
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
