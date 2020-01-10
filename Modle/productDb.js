var knex = require("./conection.js");

var selectData = ()=>{
    return knex.select("*").from("product")
}

var selectProductId = (product_id)=>{
    return knex.select("*").from("product").where("product_id", product_id)
}

var selectProductName = (product_name,limit)=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").limit(limit)
    .where("name",product_name)
    
}

var join_categorytable =(category_id )=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('category',"product.product_id", "category.category_id").where("category_id",category_id)
    
}

var join_departmenttable = (department_id)=>{
    return knex.select(" product.product_id", "product.name", "product.description", "product.price", "product.discounted_price" , "product.thumbnail").from("product").innerJoin('department',"product.product_id", "department.department_id").where("department_id",department_id)    
}

var productDetail = (product_id)=>{
    return knex.select("product_id", "name", "description", "price", "discounted_price", "image", "image_2 ").from("product").where("product_id", product_id)
}

var joinCategorytableLocations = (product_id )=>{
    return knex.select('department.department_id','category.name as category_name','category.category_id',' department.name as department_name' ).from("product").innerJoin('category').innerJoin('department').where("product_id",product_id)
    
}

var insertdata_review = (reviews)=>{
    return knex('review').insert(reviews)
}

var join_reviewtable = (product_id)=>{
    console.log(product_id)
    return knex.select("*").from('product').innerJoin('review')
    // .where("product_id", product_id)
}



module.exports = {selectData, selectProductId, selectProductName, join_categorytable , join_departmenttable, productDetail, joinCategorytableLocations, insertdata_review, join_reviewtable }