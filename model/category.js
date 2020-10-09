const connection=require("../utility/database");
module.exports=class Category{
    constructor(id,categoryName) {
       
        this.categoryName=categoryName;        
    }
    saveProduct(){

    }
    static getCategories(){
      return connection.execute("Select * from category");
        
    }
};