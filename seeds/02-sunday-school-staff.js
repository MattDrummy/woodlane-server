
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate sundayschoolstaff restart identity cascade')
    .then(function(){
      return knex('sundayschoolstaff').insert([
        {
          name: 'Cindy Timerson',
          role: 'Superintendent'
        },
        {
          name: 'Laurie Johnson',
          role: 'Age 3 to Grade 2'
        },
        {
          name: 'Dawn Goodman',
          role: 'Grade 3 to Grade 6'
        },
        {
          name: 'Todd and Andrea Windus',
          role: 'Grade 7 to Grade 12'
        },
        {
          name: 'Dave Borland and Marie Hadden',
          role: 'Adult'
        }
      ])
    })
};
