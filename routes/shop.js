const express=require("express");
const route=express.Router();
const controller=require("../controller/shop");
route.get("/category/:categoryName",controller.productsByCategory);
route.get("/allProducts",controller.allProducts);
route.get("/product/:id",controller.productDetail);
route.get("/search",controller.getProductSearched);
route.get("/aboutUs",controller.aboutUs);
route.get("/contact",controller.contact);
route.get("/basket",controller.basket);
route.post("/addToBasket",controller.addToBasket);
route.post("/removeInBasket",controller.removeInBasket)
route.get("/",controller.homePage);

module.exports=route;