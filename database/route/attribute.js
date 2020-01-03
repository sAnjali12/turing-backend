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

module.exports = attribute