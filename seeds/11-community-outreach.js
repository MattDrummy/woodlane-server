
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate communityoutreach restart identity cascade')
    .then(function(){
      return knex('communityoutreach').insert([
        {
          name: 'Camp Fowler'
        },
        {
          name: 'Together In Christ (T.I.C)'
        },
        {
          name: 'Food Link'
        },
        {
          name: "Samaritan's Purse"
        },
        {
          name: "Hannick Hall"
        },
        {
          name: "Newark High School (exam site)"
        },
        {
          name: "Vacation Bible School"
        },
        {
          name: "Newark Food Closet"
        },
        {
          name: "Crop Walk"
        },
        {
          name: "RCA Missionaries - Peter and Patty Ford (currently in Lebanon)"
        },
        {
          name: "Church World Service"
        },
        {
          name: "ABCD Preschool"
        }
      ])
    })
};
