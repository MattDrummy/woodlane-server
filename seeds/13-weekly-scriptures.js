
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate weekly_scriptures restart identity cascade')
    .then(function(){
      return knex('weekly_scriptures').insert([
        {
          verse: 'Psalm 99'
        },
        {
          verse: 'Ephesians 1:3-4',
          verse_link: 'https://biblia.com/bible/niv/Eph%201.3-4'
        },
        {
          verse: 'Ephesians 5:25-27',
          verse_link: 'https://biblia.com/bible/niv/Ephesians%205.25-27'
        },
        {
          verse: '1 Peter 1:13-17',
          verse_link: 'https://biblia.com/bible/niv/1%20Pet%201.13-17'
        },
        {
          verse: '1 Peter 2:9-12',
          verse_link: 'https://biblia.com/bible/niv/1%20Peter%202.9-12'
        }
      ])
    })
};
