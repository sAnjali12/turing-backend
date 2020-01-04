var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("product")
}

var select_productId = (product_id)=>{
    return knex.select("*").from("product").where("product_id", product_id)
}

var join_categorytable = (category_id )=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('category',"product.product_id", "category.category_id").where("category_id",category_id)
    
}

var join_departmenttable = (department_id)=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('department',"product.product_id", "department.department_id").where("department_id",department_id)
    
}

module.exports = {selectData, select_productId ,join_departmenttable}