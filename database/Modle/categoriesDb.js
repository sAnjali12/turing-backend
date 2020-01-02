var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("category")
}

var select_categoryId = (id)=>{
    return knex.select("*").from("category").where("category_id ", id)
}

module.exports = {selectData, select_categoryId}