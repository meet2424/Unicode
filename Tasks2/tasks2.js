const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    axios.get("https://www.breakingbadapi.com/api/characters")

        .then(function (response) {

            console.log("Success");
            res.send(response.data);
        })

        .catch(function (err) {
            console.log(err);
            res.send("Error")
        })
});

app.post("/BetterCallSaul", function (req, res) {
    axios.get("https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul")

        .then(function (response) {

            console.log("Success");
            res.send(response.data);
        })

        .catch(function (err) {
            console.log(err);
            res.send("Error")
        })
})




app.listen(3000, function () {
    console.log("Server is listing to port:3000");
})