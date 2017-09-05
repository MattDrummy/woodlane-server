
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate goodnewsarchive restart identity cascade')
    .then(function(){
      return knex('goodnewsarchive').insert([
        {
          title: 'August 2017',
          link: 'https://www.dropbox.com/s/2o0jjagwib0feq5/July2017GOODNEWSpdf.pdf?dl=0'
        },
        {
          title: 'July 2017',
          link: 'https://www.dropbox.com/s/2o0jjagwib0feq5/July2017GOODNEWSpdf.pdf?dl=0'
        },
        {
          title: 'June 2017',
          link: 'https://www.dropbox.com/s/0wy8ox70ciyw9mu/June2017GOODNEWS.pdf?dl=0'
        },
        {
          title: 'May 2017',
          link: 'https://www.dropbox.com/s/yrtrpd8mace2w15/May2017GOODNEWS.pdf?dl=0'
        },
        {
          title: 'April 2017',
          link: 'https://www.dropbox.com/s/8ukoq1y1uigiehj/April.2017GOODNEWS.pdf?dl=0'
        },
        {
          title: 'March 2017',
          link: 'https://www.dropbox.com/s/oc0rk4841rcc8zp/March%202017%20Good%20News.pdf?dl=0'
        }
      ])
    })
};
