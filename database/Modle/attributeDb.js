var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("attribute")
}

var select_attributeId = (attribute_id)=>{
    return knex.select("*").from("attribute").where("attribute_id ", attribute_id)
}

var joinTable = (attribute_id)=>{
    return knex.select( "attribute_value.attribute_value_id", "attribute_value.value").from('attribute').innerJoin('attribute_value', 'attribute.attribute_id', 'attribute_value.attribute_id').where("attribute_value.attribute_id",attribute_id)
    
}
// "attribute_value.attribute_value_id", "attribute_value.value"
module.exports = {selectData, select_attributeId, joinTable}