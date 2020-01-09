let knex  = require('./conection.js')


var getWithJoin = (cart_id)=>{
    return knex.select("shopping_cart. quantity", "product.price").from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.cart_id", cart_id)
}

var insertData = (orders)=>{
    return knex("orders").insert(orders)
}

var orderDetail  = (order_id)=>{
    return knex.select("orders.order_id","orders.total_amount", "orders.created_on", "orders.shipped_on", "orders.status", "product.name").from("orders").innerJoin("product", "orders.order_id", "product.product_id").where("orders.order_id", order_id)
}


module.exports = {getWithJoin, insertData,orderDetail}




