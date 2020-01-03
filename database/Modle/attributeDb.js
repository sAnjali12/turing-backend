var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("attribute")
}

module.exports = {selectData}