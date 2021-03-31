
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('truck_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('truck_ratings').insert([
        {truck_rating_id: 1, truck_rating: 5, user_id:1, truck_id: 1},
        {truck_rating_id: 2, truck_rating: 5, user_id:1, truck_id: 1},
        {truck_rating_id: 3, truck_rating: 5, user_id:1, truck_id: 1}
      ]);
    });
};
