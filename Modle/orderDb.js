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

var selectData = ()=>{
    return knex.select("*").from("orders")
}

var forOrderDetailGet = (order_id)=>{
    return knex.select("shopping_cart. quantity", "shopping_cart.product_id", "shopping_cart.attributes", "shopping_cart.quantity", "orders.order_id", "product.name","product.price").from("orders").innerJoin("product", "orders.order_id", "product.product_id").innerJoin("shopping_cart").where("orders.order_id",order_id)
}

var inOrderDetailInsert = (orderDetailData)=>{
    return knex("order_detail").insert(orderDetailData)
}

module.exports = {getWithJoin, insertData,orderDetail, selectData, forOrderDetailGet, inOrderDetailInsert}




