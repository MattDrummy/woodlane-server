
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate currentsermon restart identity cascade')
    .then(function(){
      return knex('currentsermon').insert([
        {
          title: 'Running Into The Fire',
          date: 'July 2017'
        }
      ])
    })
};
