const express = require('express');
const product = express.Router();
const productDb = require("../Modle/productDb");
product.use(express.json())


product.get("/products",(req,res)=>{
    var data = productDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


product.get("/products/:product_id/",(req,res)=>{
    var product_id  = req.params.product_id
    var data =productDb.select_productId(product_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


product.get("/products/inCategory/:category_id",(req,res)=>{
    var category_id  = req.params.category_id
    var data =productDb.join_categorytable(category_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});




module.exports = product;