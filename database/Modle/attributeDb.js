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

var produtjoinTable = (attribute_id)=>{
    return knex.select( "attribute_value.attribute_value_id", "attribute_value.attribute_name", "attribute_value.value").from('attribute_value').innerJoin('product', 'attribute_value.attribute_id', 'product.attribute_id').where("attribute_value.attribute_id",attribute_id)
    
}

module.exports = {selectData, select_attributeId, joinTable}