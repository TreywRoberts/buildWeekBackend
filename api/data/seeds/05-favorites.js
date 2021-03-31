
exports.seed = function(knex) {
  return knex('favorites').del()
    .then(function () {
      return knex('favorites').insert([
        {favorite_id: 1, user_id:3, truck_id:1},
        {favorite_id: 2, user_id:3, truck_id:2},
        {favorite_id: 3, user_id:3, truck_id:3}
      ]);
    });
};
