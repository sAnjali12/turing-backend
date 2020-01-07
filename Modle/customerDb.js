var knex = require("./conection.js");


var insertData = (customer)=>{
    return knex("customer").insert(customer)
}



module.exports = {insertData

}