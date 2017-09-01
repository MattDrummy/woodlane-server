
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate resources restart identity cascade')
    .then(function(){
      return knex('resources').insert([
        {
          title: 'RCA',
          title_link: 'http://www.rca.org/',
          subtext: 'our denominational site'
        },
        {
          title: 'GotQuestions',
          title_link: 'http://www.gotquestions.org/',
          subtext: 'great apologetics site'
        },
        {
          title: 'Bible Gateway',
          title_link: 'http://www.biblegateway.com/',
          subtext: 'online Bibles'
        },
        {
          title: 'Blue Letter Bible',
          title_link: 'http://www.blueletterbible.org/',
          subtext: 'online Bibles + commentaries'
        },
        {
          title: 'Bible Hub',
          title_link: 'http://www.biblehub.com/',
          subtext: 'online Bibles + commentaries'
        },
        {
          title: 'OnePlace',
          title_link: 'http://www.oneplace.com/',
          subtext: 'audio sermons'
        },
        {
          title: 'Logos',
          title_link: 'http://www.logos.com/',
          subtext: "Pastor Brian's choic of Bible software"
        },
        {
          title: 'e-sword',
          title_link: 'http://www.e-sword.net/',
          subtext: 'free Bible software'
        }
      ])
    })
};
