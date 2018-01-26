
exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('menu',function (table){
      table.varchar('type')
      table.varchar('name')
      table.varchar('description')
      table.integer('price')
      table.varchar('address')
      table.varchar('details')
      table.varchar('note')
      table.text('picture')
    })
])
}

exports.down = function(knex, Promise) {
  return Promise.all ([
   knex.schema.dropTable('menu')
  ])
}
