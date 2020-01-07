var knex = require("./conection.js");


var insertData = (customer)=>{
    return knex("customer").insert(customer)
}

var selectData = ()=>{
    return knex.select("*").from("customer")
}

var updateData = (update,user_id)=>{
   return knex.select("*").from("customer").where("customer_id ",user_id).update(update);
}

module.exports = {insertData, selectData, updateData

}