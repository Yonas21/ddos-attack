var express = require('express');

var app = express();
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin',null);
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/',function(req,res){
  res.send("welocme");
});
app.get('/c',function(req,res){
  res.send("fagfagfagfdak");
});

app.listen(1234);
console.log("listening with ear");
