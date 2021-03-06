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

var insertDatasaveForLater = (saveForLater)=>{
    return knex("saveForLater").insert(saveForLater)
}

var deleteDatabyitemId = (item_id)=>{
    return knex.select("*").from("shopping_cart ").where("item_id", item_id).del()
}

var getSaved = (cart_id)=>{
    return knex.select("shopping_cart.item_id", "shopping_cart.attributes", "product.price", "product.name" ).from("shopping_cart").innerJoin("product", "shopping_cart.product_id", "product.product_id").where("shopping_cart.cart_id", cart_id)
}


var removeDatabyitemId = (item_id)=>{
    return knex.select("*").from("shopping_cart ").where("item_id", item_id).del()
}

var movecartbyitem_id = (item_id)=>{
    return knex.select("saveForLater.cart_id", "saveForLater.product_id", "saveForLater. attributes", "saveForLater.quantity", "saveForLater.buy_now", "saveForLater. added_on").from("saveForLater").where("item_id",item_id)
}

var insertDataMovecart = (shopping_cart)=>{
    return knex("shopping_cart").insert(shopping_cart)
}

var deleteDataFromSaveForLater = (item_id)=>{
    return knex.select("*").from("saveForLater ").where("item_id", item_id).del()
}


module.exports = {selectData, insertData, selectby_id, joinProduct, deleteData,totalAmount,selectbyitem_id, insertDatasaveForLater, deleteDatabyitem_id, getSaved, removeDatabyitemId, movecartbyitem_id, insertDataMovecart, deleteDataFromSaveForLater }