var knex = require("./conection.js");

knex.schema.createTable('saveForLater', (table) => {
    table.increments('item_id ')
    table.string('cart_id')
    table.integer('product_id ')  
    table.string('attributes')
    table.integer('quantity')
    table.integer('buy_now')
    table.datetime('added_on')
  })
  .then(() => console.log("table created"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
  

