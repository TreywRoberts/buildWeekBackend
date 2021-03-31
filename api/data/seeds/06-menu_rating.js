
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_ratings').insert([
        {menu_rating_id: 1, menu_rating: 5, menu_id: 1, user_id:1, truck_id:1},
        {menu_rating_id: 2, menu_rating: 5, menu_id: 2, user_id:1, truck_id:1},
        {menu_rating_id: 3, menu_rating: 5, menu_id: 3, user_id:1, truck_id:1}
      ]);
    });
};
