const { json } = require("body-parser");
const express=require("express");
const path=require("path");

const { nextTick } = require("process");
const Category = require("../model/category");
const Product = require("../model/product");
const connection=require("../utility/database");

var categories=[];
var currentBasket=[];
var basket=[];
module.exports.homePage=function(req,res){
  Category.getCategories().then((value)=>{
   categories=value[0];
     Product.getProductsForIndex().then((productValue)=>{
      res.render("index",{title:"Home",categories:categories,products:productValue[0]});
     });
  });
 };
 module.exports.productsByCategory=function(req,res){
  Product.getProductsByCategory(req.params.categoryName).then((value)=>{
     let existProducts=value[0].length<1;

   res.render("category-products",{title:req.params.categoryName,products:value[0],categories:categories,existProducts:existProducts});
  });
 };
 module.exports.allProducts=function(req,res){
  Product.getAllProduct().then((value)=>{
    let existProducts=value[0].length<1;
    
    res.render("allProducts",{title:"Products",products:value[0],categories:categories,existProducts:existProducts});
  });
 }
 module.exports.aboutUs=function(req,res){
res.render("aboutUs",{title:"About Us",categories:categories});
 };
 module.exports.contact=function(req,res){
   res.render("contact",{title:"Contact",categories:categories});

 };
 module.exports.productDetail=function(req,res){
   Product.getProductSelected(req.params.id).then((value)=>{
    res.render("product-detail",{title:value[0][0].name,categories:categories,product:value[0][0]});
  });
};
module.exports.getProductSearched=function(req,res){

 Product.getProductSearched(req.query.productName).then((value)=>{
  let existProducts=value[0].length<1;
  res.render("allProducts",{title:req.query.productName,categories:categories,products:value[0],existProducts:existProducts});

 })
}
module.exports.basket=function(req,res){
  let totalPrice=0;
  basket.forEach((product)=>{
    totalPrice+=parseInt(product.price);
  });
  
res.render("basket",{title:"Basket",categories:categories,products:basket,totalPrice:totalPrice});

};
module.exports.addToBasket=function(req,res){
 if(req.body.product){
 
   basket.push(JSON.parse(req.body.product));

 }else{
  currentBasket=JSON.parse(req.body.products); 
  currentBasket.forEach((product)=>{
 
    basket.push(product);

  });
 }
  res.redirect("basket");
}
module.exports.removeInBasket=function(req,res){
console.log(JSON.parse(req.body.product));
  let removeProduct=JSON.parse(req.body.product);
  let index=basket.findIndex(()=>removeProduct);
  basket.splice(index,1);
res.redirect("/basket");
};