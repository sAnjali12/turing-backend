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

product.get("/products/search/:limit/:product_name/",(req,res)=>{
    var product_name = req.params.product_name
    var limit = req.params.limit
    var data =productDb.select_productName(product_name, limit)
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


product.get("/products/inDepartment/:department_id",(req,res)=>{
    var department_id  = req.params.department_id
    var data =productDb.join_departmenttable(department_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

product.get("/products/:product_id/details",(req,res)=>{
    var product_id  = req.params.product_id
    var data =productDb.productDetail(product_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


product.get("/products/:product_id/locations",(req,res)=>{
    var product_id  = req.params.product_id
    var data =productDb.join_categorytableLocations(product_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

product.post("/products/:product_id/reviews",(req,res)=>{
    let reviews = {
        "customer_id": req.body.customer_id,
        "review": req.body.review,
        "rating": req.body.rating,
        "created_on": req.body.created_on 
    }
    reviews["product_id"] = req.params.product_id
    productDb.insertdata_review(reviews).then((data)=>{
        return res.send({ success: true, message: 'ok' })
       }).catch((err)=>{
        console.log(err);
    })
})




module.exports = product;




