
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {menu_id: 1, menu_name: 'chicken', menu_description: "its a bird", menu_price: 1.50, truck_id:1},
        {menu_id: 2, menu_name: 'beef', menu_description: "mmm steak", menu_price: 1.50, truck_id:1},
        {menu_id: 3, menu_name: 'pork', menu_description: "yummy pork chop!", menu_price: 1.50, truck_id:1}
      ]);
    });
};
