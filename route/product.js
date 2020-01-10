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
    var data =productDb.selectProductId(product_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


product.get("/products/search/:limit/:product_name/:length",(req,res)=>{
    var product_name = req.params.product_name
    var limit = req.params.limit
    var description_length = req.params.length
    var data =productDb.selectProductName(product_name, limit)
    data.then((Response)=>{
        var description = Response[0]['description']
        var sort_description = description.slice(0,description_length);
        Response["description"] = sort_description
        main_data ={
            "product_id":Response[0]['product_id'],
            "name":Response[0]['name'],
            "description":sort_description,
            "price": Response[0]['price'],
            "discounted_price": Response[0]['discounted_price'],
            "thumbnail": Response[0]['thumbnail']
        }
        res.send(main_data)
    }).catch((err)=>{
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
    var data =productDb.joinCategorytableLocations(product_id)
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

product.get("/products/:product_id/reviews",(req,res)=>{
    var product_id  = req.params.product_id
    var data =productDb.join_reviewtable(product_id)
   data.then((Response)=>{
       res.send(Response)
   }).catch((err)=>{
       res.send(err)
   })
});



module.exports = product;




