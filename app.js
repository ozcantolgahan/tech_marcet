const express=require("express");
const app=express();
const userRoute=require("./routes/shop");
const path=require("path");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","pug");
app.listen(3000,function(){
    console.log("3000 portu dinleniyor");
});
app.use(userRoute);