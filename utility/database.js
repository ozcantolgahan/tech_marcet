const mysql=require("mysql2");
const connection=mysql.createConnection({
    host:"MYSQL_localhost",
    user:"MYSQL_user",
    database:"MYSQL_database",
    password:"MYSQL_password"
});
module.exports=connection.promise();