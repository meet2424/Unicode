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

    //                          Updation Bonus
    // Character.updateOne({ name: "Walter White" }, { status: "Alive" }, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         console.log("Updated");
    //     }

    // })

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
                res.write("<h1>Error:404</h1>")
                res.write("<p>Uh oh! please enter full name </p>")
                res.write("<p>For example: Walter(First Name)_White(Last Name)</p>")
                res.send()
            }

        })

        .catch(function (err) {
            res.write("<h1>Error:404</h1>")
            res.write("<p>Uh oh! please enter a valid character name")
            res.send()

        })

})

//                             Deleting 
app.post("/delete", function (req, res) {
    let name = req.body.deleteName
    Character.findOneAndDelete({ name: name }, function (err) {
        // console.log(ans);
        if (err) {
            res.write("Please check character name you want to remove")
        }
        else {
            console.log("Deleted");
            res.redirect("/")
        }
    })
})



//                          Creating Server on port 3000
app.listen(3000, function () {
    console.log("Server is listing on port:3000");
})


//                           Disconnecting with DataBase 
// mongoose.connection.close();