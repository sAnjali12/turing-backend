var knex = require("./conection.js");


var selectData = ()=>{
    return knex.select("*").from("shopping_cart ")
}

var insertData = (shopping_cart)=>{
    return knex("shopping_cart").insert(shopping_cart)
}

var selectby_id = (cart_id)=>{
    return knex.select("*").from("shopping_cart ").where("cart_id",cart_id)
}


var joinProduct = (item_id)=>{
    return knex.select("shopping_cart.item_id","product.name","shopping_cart.attributes","shopping_cart.quantity","product.product_id","product.price").from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.item_id", item_id)
}

var deleteData = (cart_id)=>{
    return knex.select("*").from("shopping_cart ").where("cart_id", cart_id).del()
}


var totalAmount = (cart_id)=>{
    return knex.select("*").from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.cart_id", cart_id)
}

var selectbyitem_id = (item_id)=>{
    return knex.select("shopping_cart.cart_id", "shopping_cart.product_id", "shopping_cart. attributes", "shopping_cart.quantity", "shopping_cart.buy_now", "shopping_cart. added_on").from("shopping_cart").where("item_id",item_id)
}

var insertData_saveForLater = (saveForLater)=>{
    return knex("saveForLater").insert(saveForLater)
}

var deleteDatabyitem_id = (item_id)=>{
    return knex.select("*").from("shopping_cart ").where("item_id", item_id).del()
}

var getSaved = (cart_id)=>{
    return knex.select("shopping_cart.item_id", "shopping_cart.attributes", "product.price", "product.name" ).from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.cart_id", cart_id)
}


module.exports = {selectData, insertData, selectby_id, joinProduct, deleteData,totalAmount,selectbyitem_id, insertData_saveForLater, deleteDatabyitem_id, getSaved}