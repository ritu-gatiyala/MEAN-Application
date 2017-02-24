var express= require('express');

var app=express();

app.use('/',function(req,res){
	res.send("Hello first express app...YAY!!");
})

app.listen(3000);

console.log("Server running at http://localhost:3000/");

module.exports=app;