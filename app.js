const express = require('express');
const app = express();
app.get('',(req,res)=>{
 res.send("This is home page");
});
app.get('/about',(req,res)=>{
 res.send("This is about page");
});
app.get('/contact',(req,res)=>{
 res.send("This is contact page");
});
app.get('/privacy',(req,res)=>{
    res.send("this is pravacy page");
});
app.listen(5000);   