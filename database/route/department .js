const express = require('express');
const department = express.Router();
const departmentDb = require("../Modle/departmentDb");
department.use(express.json())


department.get("/getData",(req,res)=>{
    var data = departmentDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

module.exports = department;