var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("category")
}

var select_categoryId = (id)=>{
    return knex.select("*").from("category").where("category_id ", id)
}


var joinTable = (id)=>{
    return knex.select("category.category_id", "category.department_id", "category.name",  ).from('category').innerJoin('product_category', 'category.category_id', 'product_category.product_id').where("product_id",id)
    
}

var selectDepartment_id = (department_id)=>{
    return knex.select("*").from("category").where("department_id", department_id)
}

module.exports = {selectData, select_categoryId, joinTable,selectDepartment_id}