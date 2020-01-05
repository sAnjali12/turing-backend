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

categories.get("/:id",(req,res)=>{
    var id  = req.params.id
    var data = categoriesDb.select_categoryId(id)
   data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

categories.get("/categories/inProduct/:product_id",(req,res)=>{
    var id = req.params.product_id;
    var data = categoriesDb.joinTable(id)
    data.then((Response)=>{
        res.send(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
    
})

categories.get("/categories/inDepartment/:department_id",(req,res)=>{
    let department_id = req.params.department_id;
    var data = categoriesDb.selectDepartment_id(department_id)
    data.then((Response)=>{
        res.send(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})


module.exports = categories;