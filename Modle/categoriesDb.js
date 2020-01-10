var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("category")
}

var selectCategoryId = (id)=>{
    return knex.select("*").from("category").where("category_id ", id)
}


var joinTable = (id)=>{
    return knex.select("category.category_id", "category.department_id", "category.name",  ).from('category').innerJoin('product_category', 'category.category_id', 'product_category.product_id').where("product_id",id)
    
}

var selectDepartmentid = (department_id)=>{
    return knex.select("*").from("category").where("department_id", department_id)
}



module.exports = {selectData, selectCategoryId, joinTable,selectDepartmentid}