var express = require('express')
const shoppingcart = express.Router();
const shoppingcartDb = require("../Modle/shoppingcartDb");
const randomString = require('random-string')
let generateUniqueId = randomString()
shoppingcart.use(express.json())


shoppingcart.get("/shoppingcart/generateUniqueId",(req,res)=>{
    let data  = shoppingcartDb.selectData()
    data.then(()=>{
        var cart_id = {
            "cart_id" : generateUniqueId
        } 
        res.send(cart_id)
    }).catch((err)=>{

    })
})


shoppingcart.post("/shoppingcart/add",(req,res)=>{
        let shopping_cart = {
            "cart_id": req.body.cart_id ,
            "product_id": req.body.product_id ,
            "attributes":req.body.attributes,
            "quantity":req.body.quantity,
            "added_on": new Date()
        }
        shoppingcartDb.insertData(shopping_cart).then((data)=>{
            return res.send({ success: true, message: 'ok' })
           }).catch((err)=>{
            console.log(err);
        })
    });



module.exports = shoppingcart;


