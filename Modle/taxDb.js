var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("tax")
}

var select_taxid = (tax_id)=>{
    return knex.select("*").from("tax").where("tax_id ", tax_id)
}

module.exports = {selectData, select_taxid

}