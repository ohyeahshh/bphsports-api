const mysql = require("mysql");
const con= mysql.createConnection({
    host:'sql662.main-hosting.eu',
    user:'u476632856_bphsports',
    password:"AwFh9fx8]t",
    database:"u476632856_bphsports",
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