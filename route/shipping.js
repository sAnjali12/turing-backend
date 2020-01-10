const express = require('express');
const shipping = express.Router();
const shippingDb = require("../Modle/shippingDb");
shipping.use(express.json())


shipping.get("/shippingData",(req,res)=>{
    var data = shippingDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

shipping.get("/shipping/:shipping_id",(req,res)=>{
    var shipping_id  = req.params.shipping_id
    var data = shippingDb.selectShippingId (shipping_id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});




module.exports = shipping