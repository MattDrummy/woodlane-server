
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate memory_verse restart identity cascade')
    .then(function(){
      return knex('memory_verse').insert([
        {
          message: 'Pursue peace with everyone, and the holiness without which no one will see the Lord.',
          verse: 'Hebrews 12:14 (NRSV)',
          verse_link: 'https://biblia.com/bible/nrsv/Heb%2012.14'
        }
      ])
    })
};
