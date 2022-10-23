const express = require("express");
const con = require("./config");
const app = express();


app.get("/", (req, res) => {
 
res.send("BPH Sports API is up and running") 

});

app.get("/websites", (req, res) => {
  con.query("select * from collection where 1", (err, result) => {
    if (err) { res.send("error in api") }
    else { res.send(result) }
  })
});





app.listen("5000")
