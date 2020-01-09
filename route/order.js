var express = require('express')
const orders = express.Router();
const orderDb = require("../Modle/orderDb");
orders.use(express.json())




orders.post("/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id
    var data = orderDb.getWithJoin(cart_id)
    data.then((Response)=>{
        let price = Response[0]["price"]
        let quantity = Response[0]["quantity"]
        var subtotal =  price*quantity
        var orders = {
            "total_amount": subtotal,
            "created_on": new Date(),
            "shipped_on": new Date(),
            "status": req.body.status,
            "comments": req.body.comments,
            "customer_id": req.body.customer_id,
            "auth_code": req.body.auth_code,
            "reference": req.body.reference,
            "shipping_id": req.body.shipping_id,
            "tax_id": req.body.tax_id 
        }
        var insertData = orderDb.insertData(orders)
        insertData.then((resp)=>{
            res.send("Data inserted...")
        })
    }).catch((err)=>{
        res.send(err)
    })
})


orders.get("/orders/shortDetail/:order_id",(req,res)=>{
    var order_id = req.params.order_id
    var data = orderDb.orderDetail(order_id)
    data.then((resp)=>{
        res.send(resp)
    }).catch((err)=>{
        res.send(err)
    })
})


orders.get("/orders/inCustomer",(req,res)=>{
    var data = orderDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

  


module.exports = orders

