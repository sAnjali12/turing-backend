const express = require('express');
const attribute = express.Router();
const attributeDb = require("../Modle/attributeDb");
attribute.use(express.json())

attribute.get("/attribute",(req,res)=>{
    var data = attributeDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


attribute.get("/attributes/:attribute_id",(req,res)=>{
    var id  = req.params.id
    var data = attributeDb.select_attributeId(id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


attribute.get("/attributes/values/:attribute_id",(req,res)=>{
    var attribute_id  = req.params.attribute_id
    var data = attributeDb.joinTable(attribute_id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


attribute.get("/attributes/inProduct/:product_id",(req,res)=>{
    var product_id  = req.params.product_id
    var data = attributeDb.multepleTable(product_id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});



module.exports = attribute