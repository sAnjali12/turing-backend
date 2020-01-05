const express = require('express');
const app = express();

// For department.js file..
const department = require('./route/department ');
app.use("/department", department);

// For categories.js file..
const categories = require('./route/categories');
app.use("/categories",categories)

// For attribute.js file..
const attributes = require('./route/attribute');
app.use("/attributes",attributes)

// For tax.js file..
const taxs = require('./route/tax');
app.use("/tax",taxs)

// For shipping.js file..
const shippings = require('./route/shipping');
app.use("/shipping",shippings)

// For product.js file..
const products = require('./route/product');
app.use("/product",products)
  
app.listen(5000,() =>{
    console.log("listining 5000....");
});