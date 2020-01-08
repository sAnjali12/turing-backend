var knex = require("./conection.js");


var selectData = ()=>{
    return knex.select("*").from("shopping_cart ")
}

var insertData = (shopping_cart)=>{
    return knex("shopping_cart").insert(shopping_cart)
}

module.exports = {selectData, insertData}