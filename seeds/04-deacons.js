
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate deacons restart identity cascade')
    .then(function(){
      return knex('deacons').insert([
        {
          name: 'Dave Borland'
        },
        {
          name: 'Bruce Hadden'
        },
        {
          name: 'Todd Windus'
        },
        {
          name: 'Marge Bixby'
        }
      ])
    })
};
