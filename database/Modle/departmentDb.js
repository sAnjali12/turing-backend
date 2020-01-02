var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("department")
}

var selectId = (id)=>{
    return knex.select("*").from("department").where("department_id ", id)
}
module.exports={selectData, selectId }





















