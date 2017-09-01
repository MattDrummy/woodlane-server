
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate worship_scehdule restart identity cascade')
    .then(function(){
      return knex('worship_scehdule').insert([
        {
          date: 'July 16',
          title: 'Remembering Your First Love',
          sermon_link: 'https://www.dropbox.com/s/qifz4hkuv1rct9b/sermon%20-%2007-16-17.mp3?dl=0',
          scripture: 'Hosea 10, 11, 14'
        },
        {
          date: 'July 23',
          title: 'Grabbing a Slice',
          sermon_link: 'https://www.dropbox.com/s/fc1db8pl0p7xygn/sermon%20-%2007-23-17.mp3?dl=0',
          scripture: '1 Chronicles 12, 16, John 13'
        },
        {
          date: 'July 30',
          title: 'The Truth About The Truth',
          sermon_link: 'https://www.dropbox.com/s/z6gzt06ycogs4q8/sermon%20-%2007-30-17.mp3?dl=0',
          scripture: '1 John 1:5-10',
          scripture_link: 'https://biblia.com/bible/niv/1%20John%201.5-10'
        },
        {
          date: 'August 6',
          title: 'No More',
          sermon_link: 'https://www.dropbox.com/s/03owrjd14jdh36g/sermon%20-%2008-06-17.mp3?dl=0',
          scripture: 'John 8:2-11',
          scripture_link: 'https://biblia.com/bible/niv/John%208.2-11'
        },
        {
          date: 'August 13',
          title: "God's Glue",
          sermon_link: 'https://www.dropbox.com/s/lqmgsrqam30509r/sermon%2008-20-17.mp3?dl=0',
          scripture: 'Ephesians 2:1-9',
          scripture_link: 'https://biblia.com/bible/niv/Eph%202.1-9'
        },
        {
          date: 'August 20',
          title: 'Getting Ready',
          sermon_link: 'https://www.dropbox.com/s/ra36rdoqkkq2y6s/sermon%20-%2008-27-17.mp3?dl=0',
          scripture: '1 Peter 1:13-21',
          scripture_link: 'https://biblia.com/bible/niv/1%20Pet%201.13-21'
        }
      ])
    })
};
