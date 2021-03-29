
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, user_username: 'Trey', user_password: '1234', user_email:'t@t.com'},
        {user_id: 2, user_username: 'Jim', user_password: '1234', user_email:'t@t.com'},
        {user_id: 3, user_username: 'Bob', user_password: '1234', user_email:'t@t.com'}
      ]);
    });
};
