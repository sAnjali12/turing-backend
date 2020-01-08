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

module.exports = {selectData, insertData, selectby_id}