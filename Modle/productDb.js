var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("product")
}

var select_productId = (product_id)=>{
    return knex.select("*").from("product").where("product_id", product_id)
}

var select_productName = (product_name,limit)=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").limit(limit)
    .where("name",product_name)
    
}

var join_categorytable = (category_id )=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('category',"product.product_id", "category.category_id").where("category_id",category_id)
    
}

var join_departmenttable = (department_id)=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('department',"product.product_id", "department.department_id").where("department_id",department_id)
    
}

var productDetail = (product_id)=>{
    return knex.select("product_id", "name", "description", "price", "discounted_price", "image", "image_2 ").from("product").where("product_id", product_id)
}

var join_categorytableLocations = (product_id )=>{
    return knex.select("category.name","department.department_id","category.category_id", "department.name").from('product').innerJoin('department').innerJoin('category').where('product_id',product_id)
}

var insertdata_review = (reviews)=>{
    return knex('review').insert(reviews)
}

module.exports = {selectData, select_productId, select_productName, join_categorytable , join_departmenttable, productDetail, join_categorytableLocations, insertdata_review }