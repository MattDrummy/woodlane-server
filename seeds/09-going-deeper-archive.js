
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate going_deeper restart identity cascade')
    .then(function(){
      return knex('going_deeper').insert([
        {
          question: 'Why are Christians called to be holy?'
        },
        {
          question: 'Why are we frightened by the holiness of God, while at the same time being attracted to it?'
        },
        {
          question: 'Is it possible for people to honor God and at the same time fail to revere His name?'
        }
      ])
    })
};
