const express = require('express');
const customer = express.Router();
const customerDb = require("../Modle/customerDb");
const jwt = require('jsonwebtoken')
customer.use(express.json())



customer.post("/customers",(req,res)=>{
    let customer = {
        "name": req.body.name,
        "email": req.body.email,
        "password":req.body.password,
        "credit_card":req.body.credit_card,
        "address_1": req.body.address_1,
        "address_2": req.body.address_2,
        "city": req.body.city,
        "region": req.body.region,
        "postal_code": req.body.postal_code,
        "country": req.body.country,
        "shipping_region_id": req.body.shipping_region_id,
        "day_phone": req.body.day_phone,
        "eve_phone": req.body.eve_phone,
        "mob_phone": req.body.mob_phone,
        "credit_card": req.body.credit_card
      
    }
    customerDb.insertData(customer).then((data)=>{
        return res.send({ success: true, message: 'ok' })
       }).catch((err)=>{
        console.log(err);
    })
});

customer.get("/customer",(req,res)=>{
    var data = customerDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

customer.put("/customer/update/:id",function(req,res){
   var user_id = req.params.id;
   var update = {"name": req.body.name,
                "email": req.body.email,
                "password":req.body.password,
                "day_phone": req.body.day_phone,
                "eve_phone": req.body.eve_phone,
                "mob_phone": req.body.mob_phone,}
   var data = customerDb.updateData(update,user_id)
    data.then((Response)=>{
        res.json("updated")
    }).catch((err)=>{
        console.log(err);
    })
});

customer.post("/login",(req,res)=>{
    var email  = req.body.email
    var password = req.body.password;
    var data = customerDb.user_login()
    data.then((Response)=>{
        for(index in Response){
            if(Response[index]["email"]==email && Response[index]["password"]==password){
                let token = jwt.sign({"user":Response},"Anjalis")
                res.cookie(token)
                res.send("Rigth... ")
           }
      }
    }).catch((err)=>{
        res.send(err);
    })
})

customer.put("/customers/address",(req,res)=>{
    let jwtData = req.headers.cookie
    let tokenSplit = jwtData.split("=undefined")
    let token = tokenSplit[tokenSplit.length-2]
    var customer_id = req.body.customer_id
    jwt.verify(token, "Anjalis",(err, data)=>{
        customerDetail = {
            "address_1": req.body.address_1,
            "address_2": req.body.address_2,
            "customer_id": customer_id,
            "city": req.body.city ,
            "region": req.body.region,
            "postal_code": req.body.postal_code,
            "country": req.body.country,
            "shipping_region_id": req.body.shipping_region_id
        }
        var data = customerDb.putcustomerAddress(customerDetail,customer_id)
        data.then((Response)=>{
            res.send("Data Updated......")
        }).catch((err)=>{
            res.send(err);
        })
    
    })
    
})


customer.put("/customers/Credit_card",(req,res)=>{
    let jwtData = req.headers.cookie
    let tokenSplit = jwtData.split("=undefined")
    let token = tokenSplit[tokenSplit.length-2]
    var customer_id = req.body.customer_id
    jwt.verify(token, "Anjalis",(err, data)=>{
        var updateCredit_card = {"credit_card": req.body.Credit_card,
                                  "customer_id": customer_id}
        var data = customerDb.putcustomerCredit_card(updateCredit_card,customer_id)
        data.then((Response)=>{
            res.send("Data Updated......")
        }).catch((err)=>{
            res.send(err);
        })
    
    })
    
})

module.exports = customer 