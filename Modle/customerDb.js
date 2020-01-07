var knex = require("./conection.js");


var insertData = (customer)=>{
    return knex("customer").insert(customer)
}

var selectData = ()=>{
    return knex.select("*").from("customer")
}

module.exports = {insertData, selectData

}