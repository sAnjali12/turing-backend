var express = require('express')
const shoppingcart = express.Router();
const shoppingcartDb = require("../Modle/shoppingcartDb");
const randomString = require('random-string')
let generateUniqueId = randomString()
shoppingcart.use(express.json())


shoppingcart.get("/shoppingcart/generateUniqueId",(req,res)=>{
    let data  = shoppingcartDb.selectData()
    data.then(()=>{
        var cart_id = {
            "cart_id" : generateUniqueId
        } 
        res.send(cart_id)
    }).catch((err)=>{

    })
})


shoppingcart.post("/shoppingcart/add",(req,res)=>{
        let shopping_cart = {
            "cart_id": req.body.cart_id ,
            "product_id": req.body.product_id ,
            "attributes":req.body.attributes,
            "quantity":req.body.quantity,
            "added_on": new Date()
        }
        shoppingcartDb.insertData(shopping_cart).then((data)=>{
            return res.send({ success: true, message: 'ok' })
           }).catch((err)=>{
            console.log(err);
        })
    });


shoppingcart.get("/shoppingcart/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data = shoppingcartDb.selectby_id(cart_id)
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

shoppingcart.put("/shoppingcart/update/:item_id",(req,res)=>{
    var item_id = req.params.item_id
    var data = shoppingcartDb.joinProduct(item_id)
    data.then((Response)=>{
        let price = Response[0]["price"]
        let quantity = Response[0]["quantity"]
        var subtotal =  price*quantity
        var data = {
            "item_id": Response[0]["item_id"] ,
            "name": Response[0]["name"],
            "attributes":Response[0]["attributes"],
            "product_id": Response[0]["product_id"],
            "price": Response[0]["price"],
            "quantity":Response[0]["quantity"],
            "subtotal": subtotal
          }
        res.send(data)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

shoppingcart.delete("/shoppingcart/empty/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data = shoppingcartDb.deleteData(cart_id)
    data.then((Response)=>{
        res.json("Data Deleted.....")
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

shoppingcart.get("/shoppingcart/totalAmount/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data = shoppingcartDb.joinProduct(cart_id)
    data.then((Response)=>{
        let price = Response[0]["price"]
        let quantity = Response[0]["quantity"]
        var subtotal =  price*quantity

        var totalAmount = {
            "totalAmount" : subtotal
        } 
        res.send(totalAmount)
    }).catch((err)=>{
        res.send(err)
    })


})


shoppingcart.get("/shoppingcart/saveForLater/:item_id",(req,res)=>{
    var item_id = req.params.item_id
    var data = shoppingcartDb.selectbyitem_id(item_id)
    data.then((Response)=>{
        var insertData = shoppingcartDb.insertData_saveForLater(Response)
        insertData.then((resps)=>{
           var deleteData = shoppingcartDb.deleteDatabyitem_id(item_id)
           deleteData.then((resp)=>{
               res.send("Deleted.....")
           }).catch((err)=>{
            console.log(err)
        })
        })
        
    }).catch((err)=>{
        res.send(err)
    })
})

shoppingcart.get("/shoppingcart/getSaved/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data = shoppingcartDb.getSaved(cart_id)
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})


module.exports = shoppingcart;


