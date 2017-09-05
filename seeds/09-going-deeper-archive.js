
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate goingdeeper restart identity cascade')
    .then(function(){
      return knex('goingdeeper').insert([
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
