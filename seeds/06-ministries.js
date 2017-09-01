
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate ministries restart identity cascade')
    .then(function(){
      return knex('ministries').insert([
        {
          name: 'Sunday School'
        },
        {
          name: 'Esther Circle'
        },
        {
          name: 'Choir'
        },
        {
          name: 'Fleece Blanket Ministry'
        },
        {
          name: 'Prayer Partners'
        },
        {
          name: 'Wheels of Faith'
        },
        {
          name: 'Library'
        },
        {
          name: 'Memorial Garden'
        }
      ])
    })
};
