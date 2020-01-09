let knex  = require('./conection.js')


var getWithJoin = (cart_id)=>{
    return knex.select("shopping_cart. quantity", "product.price").from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.cart_id", cart_id)
}

var insertData = (orderDetail)=>{
    return knex("orders").insert(orderDetail)
}

module.exports = {getWithJoin, insertData}