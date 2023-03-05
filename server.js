const express=require('express');
const app=express();
//--set the view engine
app.set("view engine", "ejs");

//-home
app.get("/",(req,res)=>{
      //--use rest.render to send file
      res.render("index");
});
app.get("/about",(req,res)=>{
      //--use rest.render to send file
      res.render("about");
});
app.get("/contact",(req,res)=>{
      //--use rest.render to send file
      res.render("contact");
});

app.listen(3000,()=>{
      console.log("Server running at port 3000");
});