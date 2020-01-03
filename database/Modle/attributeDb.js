var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("attribute")
}

var select_attributeId = (attribute_id)=>{
    return knex.select("*").from("attribute").where("attribute_id ", attribute_id)
}

module.exports = {selectData, select_attributeId}