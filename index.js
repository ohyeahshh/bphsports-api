const express = require("express");
const con = require("./config");
const app = express();


app.get("/", (req, res) => {
 
res.send("BPH Sports API is up and running") 

});

app.get("/websites", (req, res) => {
 console.log(req.body)
  con.query("select * from collection where 1", (err, result) => {
    if (err) {
      res.status(404).send({statusId: 404, message: "Error Occured"})
    }
    else { 
      res.status(200).send({ message: "Data Fetched.", sites: result, statusId: 200})
    }
  })
});







app.listen("5000")
