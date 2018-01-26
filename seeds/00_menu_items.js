
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        {
      ]);
    });
};
