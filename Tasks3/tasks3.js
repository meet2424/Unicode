const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

//                              Connecting with DataBase
mongoose.connect("mongodb://localhost:27017/favoriteCharDB", { useNewUrlParser: true, useUnifiedTopology: true });


//                              Creating Schema
const charSchema = new mongoose.Schema({
    char_id: Number,
    name: String,
    birthday: String,
    occupation: [String],
    img: String,
    status: String,
    nickname: String,
    appearance: [Number],
    portrayed: String,
    category: String,
    better_call_saul_appearance: [Number]
});

//                                Creating Model
const Character = mongoose.model("Character", charSchema);



//                              Get request our server received
app.get("/", function (req, res) {
    Character.find({}, function (err, result) {

        res.render('index', { array: result });
        console.log("Success");

    })
});


//                                  Post request from our form
app.post("/", function (req, res) {
    let name = req.body.charName;

    //                                  Using axios sending get request to url                                  
    axios.get("https://www.breakingbadapi.com/api/characters?name=" + name)

        .then(function (response) {


            if (name === response.data[0].name) {
                const newChar = new Character({                      //   Creating New Record 
                    char_id: response.data[0].char_id,
                    name: response.data[0].name,
                    birthday: response.data[0].birthday,
                    occupation: response.data[0].occupation,
                    img: response.data[0].img,
                    status: response.data[0].status,
                    nickname: response.data[0].nickname,
                    appearance: response.data[0].appearance,
                    portrayed: response.data[0].portrayed,
                    category: response.data[0].category,
                    better_call_saul_appearance: response.data[0].better_call_saul_appearance
                });

                newChar.save();

                console.log("Success");
                res.redirect("/");

            } else {
                res.write("Error:404")
                res.write("OHH NO please enter full name ")
                res.write("For example: Walter(First Name) White(Last Name)")
                res.end();
            }

        })

        .catch(function (err) {
            console.log(err);
            res.write("Error:404")
            res.write("OHH NO please enter a valid character name")
            res.end();
        })

})


//                          Creating Server on port 3000
app.listen(3000, function () {
    console.log("Server is listing on port:3000");
})


//                           Disconnecting with DataBase 
// mongoose.connection.close();