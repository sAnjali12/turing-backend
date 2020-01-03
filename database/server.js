const express = require('express');
const app = express();

const department = require('./route/department ');
app.use("/department", department);

// For categories.js file..
const categories = require('./route/categories');
app.use("/categories",categories)

// For attribute.js file..
const attributes = require('./route/attribute');
app.use("/attributes",attributes)
  
app.listen(5000,() =>{
    console.log("listining 5000....");
});``