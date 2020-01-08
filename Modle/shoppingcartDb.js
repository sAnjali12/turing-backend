var knex = require("./conection.js");


var selectData = ()=>{
    return knex.select("*").from("shopping_cart ")
}

var insertData = (shopping_cart)=>{
    return knex("shopping_cart").insert(shopping_cart)
}

var selectby_id = (cart_id)=>{
    return knex.select("*").from("shopping_cart ").where("cart_id",cart_id)
}


joinProduct = (item_id)=>{
    return knex.select("shopping_cart.item_id","product.name","shopping_cart.attributes","shopping_cart.quantity","product.product_id","product.price").from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.item_id", item_id)
}

var deleteData = (cart_id)=>{
    return knex.select("*").from("shopping_cart ").where("cart_id", cart_id).del()
}

module.exports = {selectData, insertData, selectby_id, joinProduct, deleteData}