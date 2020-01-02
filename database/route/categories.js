const express = require('express');
const categories = express.Router();
const categoriesDb = require("../Modle/categoriesDb");
categories.use(express.json())


categories.get("/getData",(req,res)=>{
    var data = categoriesDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

module.exports = categories;