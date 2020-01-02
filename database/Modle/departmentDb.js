var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("department")
}


module.exports={selectData}





















