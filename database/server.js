const express = require('express');
const app = express();

const department = require('./route/department ');

app.use("/", department);


  
app.listen(5000,() =>{
    console.log("listining 5000....");
});``