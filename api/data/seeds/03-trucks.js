
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_id: 1, truck_name: 'rowValue1', cuisine_type:'Chinese', user_id:1},
        {truck_id: 2, truck_name: 'rowValue2', cuisine_type:'Mexican', user_id:1},
        {truck_id: 3, truck_name: 'rowValue3', cuisine_type:'Greek', user_id:2}
      ]);
    });
};
