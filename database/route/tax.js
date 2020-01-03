const express = require('express');
const tax = express.Router();
const taxDb = require("../Modle/taxDb");
tax.use(express.json())


tax.get("/taxData",(req,res)=>{
    var data = taxDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

tax.get("/tax/:tax_id",(req,res)=>{
    var tax_id  = req.params.tax_id
    var data = taxDb.joinTable(tax_id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});




module.exports = tax