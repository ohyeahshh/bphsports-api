const mysql = require("mysql");
const con= mysql.createConnection({
    host:'sql665.main-hosting.eu',
    user:'u199803092_bphdb',
    password:"W2K/V/]^>z",
    database:"u199803092_bphdb",
    "options":{
        instanceName: 'SELECT @@servicename',
        "encrypt":true,
        "enableArithAbort":true,
        "trustServerCertificate": true,
       }
});

con.connect((err)=>{
    if(err)
    {
        console.warn(err)
    }
    else{
        console.log("hi mom")
    }
});

module.exports =con;
