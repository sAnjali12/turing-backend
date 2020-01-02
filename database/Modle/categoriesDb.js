var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("category")
}


module.exports = {selectData}