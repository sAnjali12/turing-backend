var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("shipping")
}

var select_shippingId  = (shipping_id)=>{
    return knex.select("*").from("shipping").where(" shipping_region_id ", shipping_id)
}

module.exports = {selectData, select_shippingId

}