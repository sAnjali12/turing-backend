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

var user_login = ()=>{
   return knex.select("*").from("customer")
}

var putcustomerAddress = (customerDetail, customer_id)=>{
   return knex.select("*").from("customer").where("customer_id", customer_id).update(customerDetail)
};

var putcustomerCredit_card = (updateCredit_card, customer_id)=>{
   return knex.select("*").from("customer").where("customer_id", customer_id).update(updateCredit_card)
}

module.exports = {insertData, selectData, updateData, user_login, putcustomerAddress, putcustomerCredit_card

}