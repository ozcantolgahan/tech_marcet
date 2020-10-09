const connection=require("../utility/database");
module.exports=class Product{
    constructor(id,name,price,description,categoryId,imageUrl) {
        this.id=id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.categoryId=categoryId;
        this.imageUrl=imageUrl;
        
    }
    saveProduct(){

    }
    static getProductsForIndex(){
        return connection.execute("Select * from products LIMIT 6");
    }
    static getProductsByCategory(categoryName){
        return connection.execute("SELECT products.id,products.name,products.description,products.price,products.imageUrl FROM shop_app.products JOIN shop_app.category where category.categoryName=? and category.id=products.categoryId;",[categoryName]);
        
        
    }
    static getAllProduct(){
        return connection.execute("Select * from products");
    }
    static getProductSelected(id){
        return connection.execute("SELECT * FROM shop_app.products where products.id=?;",[id]);
    }
    static getProductSearched(productSearch){
        return connection.execute(`SELECT products.id,products.name,products.description,products.price,products.imageUrl FROM shop_app.products JOIN shop_app.category where (category.categoryName LIKE ? OR products.name LIKE ?) and category.id=products.categoryId;`,[`${productSearch}%`,`${productSearch}%`]);

    }




};