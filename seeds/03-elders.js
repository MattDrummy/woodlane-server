
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate elders restart identity cascade')
    .then(function(){
      return knex('elders').insert([
        {
          name: 'Marie Hadden'
        },
        {
          name: 'Dawn Goodman'
        },
        {
          name: 'Candy Matthews'
        },
        {
          name: 'Bob Briggs'
        }
      ])
    })
};
